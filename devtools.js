(() => {
  chrome.devtools.panels.create(
    "Working Panel",
    "icon.png",
    "devtool-panel.html",
    (panel) => {
      if (chrome.devtools.inspectedWindow.tabId === null) {
        throw new Error("Missing tabId");
      }

      port = chrome.runtime.connect({
        name: "tabId-" + chrome.devtools.inspectedWindow.tabId
      });
      panel.onShown.addListener(() => {
        console.log("panel shown");
      });
    });

  return {};
})();
