document.getElementById("btn-start").addEventListener("click", () => {
  autoLoad(),
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
      });
    }),
    autoSave();
});

function autoSave() {
  document.getElementById("btn-save").addEventListener("click", () => {
    chrome.storage.sync.set(
      {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
      },
      function () {
        console.log("Email and Password Saved " + email + " " + pass);
      }
    );
  });
}

function autoLoad() {
  document.getElementById("btn-load").addEventListener("click", () => {
    chrome.storage.sync.get(["email", "pass"], function (result) {
      (document.getElementById("email").value = result.email),
        (document.getElementById("pass").value = result.pass);
    });
  });
}
// document.getElementsByClassName("btn-primary")

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
