//this didn't work
function login() {
  console.log("Login Button Clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
      },
      function (response) {
        console.log(response.status);
      }
    );
  });
}

document.getElementById("btn-save").addEventListener("click", () => {
  chrome.storage.sync.set(
    {
      email: getElementById("email").value,
      pass: getElementById("pass").value,
    },
    function () {
      console.log("Saved");
    }
  );
});

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
