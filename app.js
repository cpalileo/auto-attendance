chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    (document.getElementById("username").value = request.email),
      (document.getElementById("password").value = request.pass),
      document.querySelector("button").click();
  } catch (error) {
    console.log({ cause: error });
    sendResponse({ status: "Exception occurred" });
  }
});
