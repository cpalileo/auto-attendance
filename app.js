chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    (document.getElementById("username").value = request.email),
      (document.getElementById("password").value = request.pass);
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception occurred" });
  }
});
