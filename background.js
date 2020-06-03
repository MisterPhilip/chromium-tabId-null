(() => {
  /**
   * Accept incoming connections from our devtools panels
   */
  chrome.runtime.onConnect.addListener((tab) => {
    console.log("chrome.runtime.onConnect", tab);
  });
})();