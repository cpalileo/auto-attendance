chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getUrl("welcome/hello.html");
  let tab = await chrome.tabs.create({});
});
