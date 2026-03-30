/**
 * Tisk Šepic Frontend Editor — inline visual editing system
 * Loaded only when editor mode is active (via ts-editor-runtime.js)
 *
 * Features:
 * - Click any [data-editable] text to edit inline
 * - Click any [data-editable-type="image"] to replace (shows required dimensions)
 * - Floating toolbar for edit/save/revert actions
 * - Image upload modal with dimension validation & preview
 * - All changes persist to Supabase via /api/frontend-editor
 * - Styled to match Tisk Šepic design system (dark charcoal, warm accents)
 */
(function () {
  "use strict";

  var API = "/api/frontend-editor";
  var TOKEN = sessionStorage.getItem("ts-editor-token");
  var PAGE_ID = (location.pathname.replace(/\/+$/, "") || "/").replace(/\.html$/, "");
  var pendingChanges = {};
  var originalValues = {};

  function injectStyles() {
    var css = document.createElement("style");
    css.id = "ts-editor-styles";
    css.textContent = [
      /* Toolbar */
      "#ts-editor-toolbar{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;align-items:center;gap:12px;padding:10px 24px;font-family:'Inter',-apple-system,sans-serif;font-size:13px;font-weight:500;letter-spacing:0.3px;color:#fff;background:rgba(26,23,21,0.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.08);transition:transform 0.3s ease}",
      "#ts-editor-toolbar .editor-logo{font-size:15px;font-weight:800;letter-spacing:-0.5px;opacity:0.9;margin-right:8px}",
      "#ts-editor-toolbar .editor-status{flex:1;font-size:12px;color:rgba(255,255,255,0.5)}",
      "#ts-editor-toolbar .editor-btn{padding:7px 18px;font-family:inherit;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;border:none;cursor:pointer;border-radius:6px;transition:all 0.25s ease}",
      "#ts-editor-toolbar .editor-btn-save{background:#1a1a1a;color:#fff;border:1px solid rgba(255,255,255,0.2)}",
      "#ts-editor-toolbar .editor-btn-save:hover{background:#333;border-color:rgba(255,255,255,0.4)}",
      "#ts-editor-toolbar .editor-btn-save:disabled{opacity:0.3;cursor:default}",
      "#ts-editor-toolbar .editor-btn-discard{background:transparent;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15)}",
      "#ts-editor-toolbar .editor-btn-discard:hover{border-color:rgba(255,255,255,0.4);color:#fff}",
      "#ts-editor-toolbar .editor-btn-exit{background:transparent;color:rgba(255,255,255,0.4);border:none;font-size:10px;border-radius:6px;padding:7px 12px}",
      "#ts-editor-toolbar .editor-btn-exit:hover{color:#fff;background:rgba(255,255,255,0.08)}",
      "#ts-editor-toolbar .editor-changes-count{display:inline-block;background:rgba(255,255,255,0.15);padding:2px 8px;font-size:11px;font-weight:700;border-radius:4px;margin-left:4px}",

      /* Editable element highlights */
      "[data-editable].ts-editable-active{outline:2px dashed rgba(26,26,26,0.35);outline-offset:4px;cursor:pointer;position:relative;transition:outline-color 0.2s}",
      "[data-editable].ts-editable-active:hover{outline-color:rgba(26,26,26,0.7)}",
      "[data-editable].ts-editable-active:focus{outline:2px solid #1a1a1a;outline-offset:4px;background:rgba(26,26,26,0.03)}",
      "[data-editable].ts-editable-active.ts-changed{outline-color:#c4a87c;outline-style:solid}",

      /* Edit badge */
      "[data-editable].ts-editable-active::after{content:attr(data-editable-label);position:absolute;top:-22px;left:0;font-family:'Inter',sans-serif;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;background:rgba(26,26,26,0.85);padding:2px 8px;border-radius:3px;pointer-events:none;opacity:0;transition:opacity 0.2s;white-space:nowrap;z-index:10}",
      "[data-editable].ts-editable-active:hover::after{opacity:1}",
      "[data-editable].ts-editable-active.ts-changed::after{background:rgba(196,168,124,0.9)}",

      /* Image editable — overlay */
      "[data-editable-type='image'].ts-editable-active,[data-editable-type='bg-image'].ts-editable-active{cursor:pointer}",
      ".ts-img-overlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(10,10,10,0.6);opacity:0;transition:opacity 0.25s;pointer-events:none;z-index:5}",
      "[data-editable-type='image'].ts-editable-active:hover .ts-img-overlay,[data-editable-type='bg-image'].ts-editable-active:hover .ts-img-overlay{opacity:1}",
      ".ts-img-overlay-icon{font-size:32px;color:#fff}",
      ".ts-img-overlay-text{font-family:'Inter',sans-serif;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.9)}",
      ".ts-img-overlay-dims{font-family:'Inter',sans-serif;font-size:10px;color:rgba(255,255,255,0.6)}",

      /* Image upload modal */
      "#ts-image-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px)}",
      "#ts-image-modal.active{display:flex}",
      "#ts-image-modal-inner{background:#1a1a1a;border:1px solid rgba(255,255,255,0.1);border-radius:12px;width:520px;max-width:92vw;max-height:90vh;overflow:auto;color:#eee;font-family:'Inter',sans-serif}",
      "#ts-image-modal-inner .modal-header{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.08)}",
      "#ts-image-modal-inner .modal-header h3{font-size:18px;font-weight:700;letter-spacing:-0.3px}",
      "#ts-image-modal-inner .modal-close{background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:4px 8px}",
      "#ts-image-modal-inner .modal-close:hover{color:#fff}",
      "#ts-image-modal-inner .modal-body{padding:24px}",
      ".ts-drop-zone{border:2px dashed rgba(196,168,124,0.3);border-radius:10px;padding:48px 24px;text-align:center;cursor:pointer;transition:all 0.25s}",
      ".ts-drop-zone:hover,.ts-drop-zone.dragover{border-color:#c4a87c;background:rgba(196,168,124,0.06)}",
      ".ts-drop-zone-icon{font-size:40px;color:rgba(196,168,124,0.5);margin-bottom:12px}",
      ".ts-drop-zone-text{font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:4px}",
      ".ts-drop-zone-dims{font-size:11px;color:rgba(255,255,255,0.35)}",
      ".ts-image-preview{margin-top:20px;text-align:center}",
      ".ts-image-preview img{max-width:100%;max-height:300px;border:1px solid rgba(255,255,255,0.1);border-radius:8px}",
      ".ts-image-preview-info{margin-top:12px;font-size:11px;color:rgba(255,255,255,0.5)}",
      ".ts-image-preview-warn{color:#c4a87c;font-weight:600}",
      ".ts-image-preview-ok{color:#4CAF50;font-weight:600}",
      ".ts-modal-actions{display:flex;gap:12px;margin-top:20px;justify-content:flex-end}",
      ".ts-modal-actions .editor-btn{padding:10px 24px;border-radius:8px}",

      /* Toast */
      "#ts-editor-toast{position:fixed;bottom:24px;right:24px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none}",
      ".ts-toast{padding:12px 20px;font-family:'Inter',sans-serif;font-size:13px;font-weight:500;color:#fff;background:rgba(26,23,21,0.95);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);border-radius:8px;transform:translateX(120%);transition:transform 0.3s ease;pointer-events:auto}",
      ".ts-toast.show{transform:translateX(0)}",
      ".ts-toast.success{border-left:3px solid #4CAF50}",
      ".ts-toast.error{border-left:3px solid #E53935}",
      ".ts-toast.info{border-left:3px solid #c4a87c}",

      /* Adjust page for toolbar */
      "body.ts-editor-active{padding-top:52px!important}",
    ].join("\n");
    document.head.appendChild(css);
  }

  function createToolbar() {
    var tb = document.createElement("div");
    tb.id = "ts-editor-toolbar";
    tb.innerHTML = [
      '<span class="editor-logo">TŠ Editor</span>',
      '<span class="editor-status" id="editorStatus">Urejanje aktivno — kliknite na besedilo ali sliko za urejanje</span>',
      '<button class="editor-btn editor-btn-discard" id="editorDiscard" style="display:none" title="Zavrzi spremembe">Zavrzi</button>',
      '<button class="editor-btn editor-btn-save" id="editorSave" disabled title="Shrani spremembe">Shrani <span class="editor-changes-count" id="editorCount" style="display:none">0</span></button>',
      '<button class="editor-btn editor-btn-exit" id="editorExit" title="Zapri urejevalnik">Zapri ✕</button>',
    ].join("");
    document.body.prepend(tb);
    document.body.classList.add("ts-editor-active");

    var toastContainer = document.createElement("div");
    toastContainer.id = "ts-editor-toast";
    document.body.appendChild(toastContainer);

    var modal = document.createElement("div");
    modal.id = "ts-image-modal";
    modal.innerHTML = [
      '<div id="ts-image-modal-inner">',
      '  <div class="modal-header">',
      '    <h3 id="imgModalTitle">Zamenjaj sliko</h3>',
      '    <button class="modal-close" id="imgModalClose">&times;</button>',
      '  </div>',
      '  <div class="modal-body">',
      '    <div class="ts-drop-zone" id="imgDropZone">',
      '      <div class="ts-drop-zone-icon">&#x1F4F7;</div>',
      '      <div class="ts-drop-zone-text">Povlecite sliko sem ali kliknite za izbiro</div>',
      '      <div class="ts-drop-zone-dims" id="imgDropDims">Priporočene dimenzije: --</div>',
      '      <input type="file" id="imgFileInput" accept="image/*" style="display:none"/>',
      '    </div>',
      '    <div class="ts-image-preview" id="imgPreview" style="display:none">',
      '      <img id="imgPreviewImg" alt="Predogled"/>',
      '      <div class="ts-image-preview-info" id="imgPreviewInfo"></div>',
      '    </div>',
      '    <div class="ts-modal-actions">',
      '      <button class="editor-btn editor-btn-discard" id="imgModalCancel">Prekliči</button>',
      '      <button class="editor-btn editor-btn-save" id="imgModalSave" disabled>Zamenjaj sliko</button>',
      '    </div>',
      '  </div>',
      '</div>',
    ].join("\n");
    document.body.appendChild(modal);
  }

  function toast(message, type) {
    var container = document.getElementById("ts-editor-toast");
    var t = document.createElement("div");
    t.className = "ts-toast " + (type || "info");
    t.textContent = message;
    container.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () {
      t.classList.remove("show");
      setTimeout(function () { t.remove(); }, 300);
    }, 3000);
  }

  function updateToolbar() {
    var count = Object.keys(pendingChanges).length;
    var saveBtn = document.getElementById("editorSave");
    var discardBtn = document.getElementById("editorDiscard");
    var countBadge = document.getElementById("editorCount");
    var status = document.getElementById("editorStatus");

    saveBtn.disabled = count === 0;
    discardBtn.style.display = count > 0 ? "" : "none";
    countBadge.style.display = count > 0 ? "" : "none";
    countBadge.textContent = count;

    status.textContent = count > 0
      ? count + " neshranjenih sprememb"
      : "Urejanje aktivno — kliknite na besedilo ali sliko za urejanje";
  }

  function activateTextEditing() {
    var editables = document.querySelectorAll('[data-editable]:not([data-editable-type="image"])');
    editables.forEach(function (el) {
      var id = el.getAttribute("data-editable");
      var type = el.getAttribute("data-editable-type") || "text";
      var label = el.getAttribute("data-editable-label") || id;

      originalValues[id] = type === "richtext" ? el.innerHTML : el.textContent;
      el.classList.add("ts-editable-active");
      el.setAttribute("contenteditable", type === "richtext" ? "true" : "plaintext-only");
      el.setAttribute("data-editable-label", label);

      if (type !== "richtext") {
        el.addEventListener("paste", function (e) {
          e.preventDefault();
          var text = (e.clipboardData || window.clipboardData).getData("text/plain");
          document.execCommand("insertText", false, text);
        });
      }

      el.addEventListener("blur", function () {
        var current = type === "richtext" ? el.innerHTML : el.textContent;
        if (current !== originalValues[id]) {
          pendingChanges[id] = { type: type === "richtext" ? "richtext" : "text", content: current };
          el.classList.add("ts-changed");
        } else {
          delete pendingChanges[id];
          el.classList.remove("ts-changed");
        }
        updateToolbar();
      });

      el.addEventListener("focus", function () {
        toast("Urejate: " + label, "info");
      });
    });
  }

  function activateImageEditing() {
    var images = document.querySelectorAll('[data-editable-type="image"], [data-editable-type="bg-image"]');
    images.forEach(function (el) {
      if (el.classList.contains("ts-editable-active")) return;
      var id = el.getAttribute("data-editable");
      var dims = el.getAttribute("data-dimensions") || "";
      var label = el.getAttribute("data-editable-label") || id;
      var isBgImage = el.getAttribute("data-editable-type") === "bg-image";

      if (isBgImage) {
        var bgStyle = getComputedStyle(el).backgroundImage;
        originalValues[id] = bgStyle;
      } else {
        var imgEl = el.tagName === "IMG" ? el : el.querySelector("img");
        if (imgEl) originalValues[id] = imgEl.src;
      }

      el.classList.add("ts-editable-active");
      el.setAttribute("data-editable-label", label + (dims ? " (" + dims + ")" : ""));

      var parent = el.tagName === "IMG" ? el.parentElement : el;
      if (getComputedStyle(parent).position === "static") parent.style.position = "relative";

      var overlay = document.createElement("div");
      overlay.className = "ts-img-overlay";
      overlay.innerHTML = [
        '<div class="ts-img-overlay-icon">&#x1F4F7;</div>',
        '<div class="ts-img-overlay-text">Kliknite za zamenjavo</div>',
        dims ? '<div class="ts-img-overlay-dims">Dimenzije: ' + dims + 'px</div>' : '',
      ].join("");

      if (el.tagName === "IMG") {
        el.parentElement.appendChild(overlay);
        el.parentElement.style.overflow = "hidden";
      } else {
        el.appendChild(overlay);
      }

      el.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openImageModal(id, dims, label, el);
      });
    });
  }

  var currentImageTarget = null;
  var currentImageFile = null;

  function openImageModal(elementId, dimensions, label, targetEl) {
    currentImageTarget = { id: elementId, dims: dimensions, el: targetEl };
    currentImageFile = null;

    document.getElementById("imgModalTitle").textContent = "Zamenjaj: " + label;
    document.getElementById("imgDropDims").textContent = dimensions
      ? "Priporočene dimenzije: " + dimensions + " px"
      : "Prosta velikost (priporočeno: visoka ločljivost)";
    document.getElementById("imgPreview").style.display = "none";
    document.getElementById("imgModalSave").disabled = true;
    document.getElementById("imgFileInput").value = "";
    document.getElementById("ts-image-modal").classList.add("active");
  }

  function closeImageModal() {
    document.getElementById("ts-image-modal").classList.remove("active");
    currentImageTarget = null;
    currentImageFile = null;
  }

  function handleImageFile(file) {
    if (!file || !file.type.startsWith("image/")) { toast("Prosimo, izberite slikovno datoteko", "error"); return; }
    if (file.size > 10 * 1024 * 1024) { toast("Slika je prevelika (max 10 MB)", "error"); return; }

    currentImageFile = file;
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        document.getElementById("imgPreviewImg").src = e.target.result;
        document.getElementById("imgPreview").style.display = "";

        var info = img.naturalWidth + " x " + img.naturalHeight + " px";
        var sizeKB = Math.round(file.size / 1024);
        info += " | " + (sizeKB > 1024 ? (sizeKB / 1024).toFixed(1) + " MB" : sizeKB + " KB");

        if (currentImageTarget.dims) {
          var parts = currentImageTarget.dims.split("x").map(Number);
          var reqW = parts[0], reqH = parts[1];
          if (reqW && reqH) {
            var ratioDiff = Math.abs((reqW / reqH) - (img.naturalWidth / img.naturalHeight));
            if (ratioDiff > 0.15) {
              info += '<br><span class="ts-image-preview-warn">Razmerje stranic se ne ujema (' + reqW + 'x' + reqH + ')</span>';
            } else if (img.naturalWidth < reqW * 0.5) {
              info += '<br><span class="ts-image-preview-warn">Slika je premajhna (min. ' + reqW + 'px)</span>';
            } else {
              info += '<br><span class="ts-image-preview-ok">Dimenzije ustrezajo</span>';
            }
          }
        }
        document.getElementById("imgPreviewInfo").innerHTML = info;
        document.getElementById("imgModalSave").disabled = false;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  async function saveAllChanges() {
    var keys = Object.keys(pendingChanges);
    if (keys.length === 0) return;

    var saveBtn = document.getElementById("editorSave");
    saveBtn.disabled = true;
    saveBtn.textContent = "Shranjujem...";
    var errors = 0;

    for (var i = 0; i < keys.length; i++) {
      var elementId = keys[i];
      var change = pendingChanges[elementId];
      try {
        var body = {
          action: change.type === "image" ? "save_image" : "save_text",
          page_id: PAGE_ID,
          element_id: elementId,
          content_type: change.type,
        };
        if (change.type === "image") {
          body.image_data = change.image_data;
          body.image_type = change.image_content_type;
          body.image_name = change.image_name;
        } else {
          body.content = change.content;
        }

        var resp = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: "Bearer " + TOKEN },
          body: JSON.stringify(body),
        });
        if (!resp.ok) throw new Error("HTTP " + resp.status);

        if (change.type === "image") {
          var data = await resp.json();
          if (data.image_url) {
            var el = document.querySelector('[data-editable="' + elementId + '"]');
            if (el && el.getAttribute("data-editable-type") === "bg-image") {
              el.style.backgroundImage = "url(" + data.image_url + ")";
            } else {
              var imgEl = el && el.tagName === "IMG" ? el : el && el.querySelector("img");
              if (imgEl) imgEl.src = data.image_url;
            }
            originalValues[elementId] = data.image_url;
          }
        } else {
          originalValues[elementId] = change.content;
        }

        var changedEl = document.querySelector('[data-editable="' + elementId + '"]');
        if (changedEl) changedEl.classList.remove("ts-changed");
        delete pendingChanges[elementId];
      } catch (err) {
        errors++;
        console.error("Save error for " + elementId + ":", err);
      }
    }

    saveBtn.innerHTML = 'Shrani <span class="editor-changes-count" id="editorCount" style="display:none">0</span>';
    updateToolbar();
    toast(errors === 0 ? "Vse spremembe shranjene!" : errors + " sprememb ni bilo mogoče shraniti", errors === 0 ? "success" : "error");
  }

  function discardChanges() {
    Object.keys(pendingChanges).forEach(function (elementId) {
      var el = document.querySelector('[data-editable="' + elementId + '"]');
      if (!el) return;
      var change = pendingChanges[elementId];
      if (change.type === "image") {
        if (el.getAttribute("data-editable-type") === "bg-image" && originalValues[elementId]) {
          el.style.backgroundImage = originalValues[elementId];
        } else {
          var imgEl = el.tagName === "IMG" ? el : el.querySelector("img");
          if (imgEl && originalValues[elementId]) imgEl.src = originalValues[elementId];
        }
      } else {
        var editType = el.getAttribute("data-editable-type");
        if (editType === "richtext") { el.innerHTML = originalValues[elementId] || ""; }
        else { el.textContent = originalValues[elementId] || ""; }
      }
      el.classList.remove("ts-changed");
    });
    pendingChanges = {};
    updateToolbar();
    toast("Spremembe zavržene", "info");
  }

  function exitEditor() {
    if (Object.keys(pendingChanges).length > 0) {
      if (!confirm("Imate neshranjene spremembe. Zapustite urejevalnik?")) return;
    }
    sessionStorage.removeItem("ts-editor-token");
    ["ts-editor-toolbar", "ts-image-modal", "ts-editor-toast", "ts-editor-styles"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.remove();
    });
    document.querySelectorAll("[data-editable]").forEach(function (el) {
      el.classList.remove("ts-editable-active", "ts-changed");
      el.removeAttribute("contenteditable");
    });
    document.querySelectorAll(".ts-img-overlay").forEach(function (el) { el.remove(); });
    document.body.classList.remove("ts-editor-active");
    toast("Urejevalnik zaprt", "info");
  }

  function bindEvents() {
    document.getElementById("editorSave").addEventListener("click", saveAllChanges);
    document.getElementById("editorDiscard").addEventListener("click", function () {
      if (confirm("Zavrzite vse neshranjene spremembe?")) discardChanges();
    });
    document.getElementById("editorExit").addEventListener("click", exitEditor);

    var dropZone = document.getElementById("imgDropZone");
    var fileInput = document.getElementById("imgFileInput");
    dropZone.addEventListener("click", function () { fileInput.click(); });
    fileInput.addEventListener("change", function () { if (fileInput.files[0]) handleImageFile(fileInput.files[0]); });
    dropZone.addEventListener("dragover", function (e) { e.preventDefault(); dropZone.classList.add("dragover"); });
    dropZone.addEventListener("dragleave", function () { dropZone.classList.remove("dragover"); });
    dropZone.addEventListener("drop", function (e) { e.preventDefault(); dropZone.classList.remove("dragover"); if (e.dataTransfer.files[0]) handleImageFile(e.dataTransfer.files[0]); });

    document.getElementById("imgModalClose").addEventListener("click", closeImageModal);
    document.getElementById("imgModalCancel").addEventListener("click", closeImageModal);

    document.getElementById("imgModalSave").addEventListener("click", function () {
      if (!currentImageTarget || !currentImageFile) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        var base64 = e.target.result.split(",")[1];
        pendingChanges[currentImageTarget.id] = {
          type: "image", image_data: base64,
          image_content_type: currentImageFile.type,
          image_name: currentImageFile.name,
        };
        var el = currentImageTarget.el;
        if (el.getAttribute("data-editable-type") === "bg-image") {
          el.style.backgroundImage = "url(" + e.target.result + ")";
        } else {
          var imgEl = el.tagName === "IMG" ? el : el.querySelector("img");
          if (imgEl) imgEl.src = e.target.result;
        }
        el.classList.add("ts-changed");
        updateToolbar();
        closeImageModal();
        toast("Slika pripravljena za shranjevanje", "info");
      };
      reader.readAsDataURL(currentImageFile);
    });

    document.getElementById("ts-image-modal").addEventListener("click", function (e) { if (e.target === this) closeImageModal(); });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); if (Object.keys(pendingChanges).length > 0) saveAllChanges(); }
      if (e.key === "Escape") {
        if (document.getElementById("ts-image-modal").classList.contains("active")) closeImageModal();
        else if (document.activeElement && document.activeElement.hasAttribute("data-editable")) document.activeElement.blur();
      }
    });
  }

  function activateNewEditables() {
    // Activate any text editables not yet initialized
    var textEls = document.querySelectorAll('[data-editable]:not([data-editable-type="image"]):not(.ts-editable-active)');
    textEls.forEach(function (el) {
      var id = el.getAttribute("data-editable");
      var type = el.getAttribute("data-editable-type") || "text";
      var label = el.getAttribute("data-editable-label") || id;

      originalValues[id] = type === "richtext" ? el.innerHTML : el.textContent;
      el.classList.add("ts-editable-active");
      el.setAttribute("contenteditable", type === "richtext" ? "true" : "plaintext-only");
      el.setAttribute("data-editable-label", label);

      if (type !== "richtext") {
        el.addEventListener("paste", function (e) {
          e.preventDefault();
          var text = (e.clipboardData || window.clipboardData).getData("text/plain");
          document.execCommand("insertText", false, text);
        });
      }

      el.addEventListener("blur", function () {
        var current = type === "richtext" ? el.innerHTML : el.textContent;
        if (current !== originalValues[id]) {
          pendingChanges[id] = { type: type === "richtext" ? "richtext" : "text", content: current };
          el.classList.add("ts-changed");
        } else {
          delete pendingChanges[id];
          el.classList.remove("ts-changed");
        }
        updateToolbar();
      });

      el.addEventListener("focus", function () {
        toast("Urejate: " + label, "info");
      });
    });

    // Activate any image editables not yet initialized
    var imgEls = document.querySelectorAll('[data-editable-type="image"]:not(.ts-editable-active), [data-editable-type="bg-image"]:not(.ts-editable-active)');
    imgEls.forEach(function (el) {
      var id = el.getAttribute("data-editable");
      var dims = el.getAttribute("data-dimensions") || "";
      var label = el.getAttribute("data-editable-label") || id;
      var isBgImage = el.getAttribute("data-editable-type") === "bg-image";

      if (isBgImage) {
        originalValues[id] = getComputedStyle(el).backgroundImage;
      } else {
        var imgEl = el.tagName === "IMG" ? el : el.querySelector("img");
        if (imgEl) originalValues[id] = imgEl.src;
      }

      el.classList.add("ts-editable-active");
      el.setAttribute("data-editable-label", label + (dims ? " (" + dims + ")" : ""));

      var parent = el.tagName === "IMG" ? el.parentElement : el;
      if (getComputedStyle(parent).position === "static") parent.style.position = "relative";

      var overlay = document.createElement("div");
      overlay.className = "ts-img-overlay";
      overlay.innerHTML = [
        '<div class="ts-img-overlay-icon">&#x1F4F7;</div>',
        '<div class="ts-img-overlay-text">Kliknite za zamenjavo</div>',
        dims ? '<div class="ts-img-overlay-dims">Dimenzije: ' + dims + 'px</div>' : '',
      ].join("");

      if (el.tagName === "IMG") {
        el.parentElement.appendChild(overlay);
        el.parentElement.style.overflow = "hidden";
      } else {
        el.appendChild(overlay);
      }

      el.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openImageModal(id, dims, label, el);
      });
    });
  }

  function startObserver() {
    // Watch for React rendering new elements with data-editable
    var observer = new MutationObserver(function (mutations) {
      var shouldRescan = false;
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) { shouldRescan = true; break; }
      }
      if (shouldRescan) activateNewEditables();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    if (!TOKEN) { console.warn("TS Editor: No auth token"); return; }
    injectStyles();
    createToolbar();
    activateTextEditing();
    activateImageEditing();
    bindEvents();
    updateToolbar();
    toast("Urejevalnik aktiviran! Kliknite na besedilo ali sliko.", "success");

    // Observe DOM for late-rendered React elements
    startObserver();

    // Fallback: re-scan after delays to catch React async renders
    setTimeout(activateNewEditables, 1000);
    setTimeout(activateNewEditables, 3000);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); }
  else { init(); }
})();
