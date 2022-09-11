// Take Attendance button event listener
document.getElementById("start-btn").addEventListener("click", function () {
  // Take inputted parent portal credentials
  let valueUsername = document.getElementById("username").value;
  let valuePassword = document.getElementById("password").value;

  chrome.tabs.executeScript(
    {
      // Send credentials to main script
      code: `var value = ${(valueUsername, valuePassword)};`,
    },
    function () {
      window.open(
        "https://southsuttercs.org/iemschools/website-login",
        "chromeTab"
      );
      //run the script in the index.js
      chrome.tabs.executeScript({
        file: "index.js",
      });
    }
  );
});
