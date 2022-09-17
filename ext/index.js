const autoFill = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    });
  });
};

const autoSave = () => {
  chrome.storage.sync.set({
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
  });
};

function autoLoad() {
  chrome.storage.sync.get(["email", "pass"], function (result) {
    (document.getElementById("email").value = result.email),
      (document.getElementById("pass").value = result.pass);
  });
}

autoLoad();

document.getElementById("btn-start").addEventListener("click", () => {
  autoFill();
  autoSave();
});

// document.getElementsByClassName("btn-primary")

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
