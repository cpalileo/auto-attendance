// Auto fill login credentials function
const autoFill = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
      login: document.querySelector("button[type='submit']"),
    });
  });
};

// Auto save login credentials function
const autoSave = () => {
  chrome.storage.sync.set({
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
  });
};

// Function to auto click login button.  Need to focus on chrome.tabs **researching**
const autoClick = () => {
  login.click();
};

// Function to auto load last used login credentials
function autoLoad() {
  chrome.storage.sync.get(["email", "pass"], function (result) {
    (document.getElementById("email").value = result.email),
      (document.getElementById("pass").value = result.pass);
  });
}

// Upon load envoke function to autoload credentials
autoLoad();

// Event listener for extension button
document.getElementById("btn-start").addEventListener("click", () => {
  autoFill();
  autoSave();
  autoClick();
  // ,
  //   function (response) {
  //     console.log(response.status);
  //   };
});
// document.getElementsByClassName("btn-primary")

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
