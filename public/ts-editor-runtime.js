/**
 * Tisk Šepic Editor Runtime — lightweight content override loader
 * Include on every page: <script src="/ts-editor-runtime.js" defer></script>
 *
 * On page load, fetches saved content overrides from the API
 * and patches the DOM so visitors see the edited content.
 * ~2KB, no dependencies, fails silently for visitors.
 */
(function () {
  "use strict";

  var API = "/api/frontend-editor";

  function getPageId() {
    var path = location.pathname.replace(/\/+$/, "") || "/";
    return path.replace(/\.html$/, "");
  }

  var _pendingOverrides = null;

  function applyOverride(elementId, override) {
    var el = document.querySelector('[data-editable="' + elementId + '"]');
    if (!el) return false;

    if (override.type === "image" && override.image_url) {
      var editType = el.getAttribute("data-editable-type");
      if (el.tagName === "IMG") {
        el.src = override.image_url;
      } else if (editType === "bg-image") {
        el.style.backgroundImage = "url(" + override.image_url + ")";
      } else {
        var childImg = el.querySelector("img");
        if (childImg) childImg.src = override.image_url;
        else el.style.backgroundImage = "url(" + override.image_url + ")";
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

  function applyOverrides(overrides) {
    if (!overrides || typeof overrides !== "object") return;
    _pendingOverrides = overrides;

    var keys = Object.keys(overrides);
    var remaining = {};
    for (var i = 0; i < keys.length; i++) {
      if (!applyOverride(keys[i], overrides[keys[i]])) {
        remaining[keys[i]] = overrides[keys[i]];
      }
    }

    // Retry for elements not yet in DOM (React async rendering)
    if (Object.keys(remaining).length > 0) {
      var retries = 0;
      var retryInterval = setInterval(function () {
        retries++;
        var stillRemaining = {};
        var rKeys = Object.keys(remaining);
        for (var j = 0; j < rKeys.length; j++) {
          if (!applyOverride(rKeys[j], remaining[rKeys[j]])) {
            stillRemaining[rKeys[j]] = remaining[rKeys[j]];
          }
        }
        remaining = stillRemaining;
        if (Object.keys(remaining).length === 0 || retries >= 10) {
          clearInterval(retryInterval);
        }
      }, 500);
    }
  }

  function loadOverrides() {
    var pageId = getPageId();
    fetch(API + "?page=" + encodeURIComponent(pageId))
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (data && data.overrides) applyOverrides(data.overrides);
      })
      .catch(function () { /* silent fail for visitors */ });
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
