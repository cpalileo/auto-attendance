//opens the thank you page into a new tab at runtime
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("thanks/index.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});

