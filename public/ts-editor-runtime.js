/**
 * Tisk Šepic Editor Runtime — content override loader
 * Waits for React to render (even after preloader), then patches the DOM.
 */
(function () {
  "use strict";

  var API = "/api/frontend-editor";
  var _overrides = null;

  function getPageId() {
    var path = location.pathname.replace(/\/+$/, "") || "/";
    return path.replace(/\.html$/, "");
  }

  function applyOverride(elementId, override) {
    var el = document.querySelector('[data-editable="' + elementId + '"]');
    if (!el) return false;

    if (override.type === "image" && override.image_url) {
      var imgUrl = override.image_url.replace(/[\r\n]/g, "");
      var editType = el.getAttribute("data-editable-type");
      if (el.tagName === "IMG") {
        el.src = imgUrl;
      } else if (editType === "bg-image") {
        el.style.backgroundImage = "url(" + imgUrl + ")";
      } else {
        var childImg = el.querySelector("img");
        if (childImg) childImg.src = imgUrl;
        else el.style.backgroundImage = "url(" + imgUrl + ")";
      }
    } else if (override.content) {
      var editType2 = el.getAttribute("data-editable-type");
      if (editType2 === "richtext") {
        el.innerHTML = override.content;
      } else {
        el.textContent = override.content;
      }
    }
    return true;
  }

  function applyAll(overrides) {
    if (!overrides) return {};
    var remaining = {};
    var keys = Object.keys(overrides);
    for (var i = 0; i < keys.length; i++) {
      if (!applyOverride(keys[i], overrides[keys[i]])) {
        remaining[keys[i]] = overrides[keys[i]];
      }
    }
    return remaining;
  }

  function startApplying(overrides) {
    if (!overrides || typeof overrides !== "object") return;
    _overrides = overrides;

    var remaining = applyAll(overrides);
    if (Object.keys(remaining).length === 0) return;

    // Use MutationObserver to catch React rendering new elements
    var observer = new MutationObserver(function () {
      remaining = applyAll(remaining);
      if (Object.keys(remaining).length === 0) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Safety: disconnect after 30 seconds regardless
    setTimeout(function () {
      observer.disconnect();
    }, 30000);
  }

  function loadOverrides() {
    var pageId = getPageId();
    fetch(API + "?page=" + encodeURIComponent(pageId))
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (data && data.overrides) startApplying(data.overrides);
      })
      .catch(function () { /* silent fail */ });
  }

  function checkEditorMode() {
    var params = new URLSearchParams(location.search);
    var editToken = params.get("edit");

    if (editToken) {
      fetch("/api/verify-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: editToken }),
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.valid) {
            sessionStorage.setItem("ts-editor-token", editToken);
            history.replaceState(null, "", location.pathname + location.hash);
            loadEditorScript();
          }
        })
        .catch(function () { });
    } else if (sessionStorage.getItem("ts-editor-token")) {
      loadEditorScript();
    }
  }

  function loadEditorScript() {
    if (document.getElementById("ts-editor-script")) return;
    var script = document.createElement("script");
    script.id = "ts-editor-script";
    script.src = "/ts-editor.js";
    document.body.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      loadOverrides();
      checkEditorMode();
    });
  } else {
    loadOverrides();
    checkEditorMode();
  }
})();
