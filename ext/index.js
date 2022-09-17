document.getElementById("btn-load").addEventListener("click", () => {
  chrome.storage.sync.get(["email", "pass"], function (result) {
    (document.getElementById("email").value = result.email),
      (document.getElementById("pass").value = result.pass);
  });
});

const autoFill = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    });
  });
};

const autoSave = () => {
  chrome.storage.sync.set(
    {
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    },
    function () {
      // NEED TO DELETE THIS CONSOLE LOG WHEN GOING LIVE
      console.log("Email and Password Saved " + email.value + " " + pass.value);
    }
  );
};

document.getElementById("btn-start").addEventListener("click", () => {
  autoFill();
  autoSave();
});

// document.getElementsByClassName("btn-primary")

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
