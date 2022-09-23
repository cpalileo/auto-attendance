// Function to auto navigate to school website
function autoNav() {
  chrome.tabs.update({
    url: "https://southsuttercs.org/iemschools/website-login",
  });
}

// Function to auto load last used login credentials
function autoLoad() {
  chrome.storage.sync.get(["email", "pass"], function (result) {
    (document.getElementById("email").value = result.email),
      (document.getElementById("pass").value = result.pass);
  });
}


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
const subBtn = document.getElementsByTagName("button")[0];

// Upon load envoke function to autoload credentials
autoLoad();

// Event listener for extension button
document.getElementById("btn-start").addEventListener("click", () => {
  autoNav();
  window.onload = function exampleFunction() {
    console.log("The Script will load now.");
  };
  autoFill();
  autoSave();
  subBtn.click();
  // window.close();
});
