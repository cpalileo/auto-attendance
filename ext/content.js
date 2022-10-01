// Function to auto load last used login credentials
function autoLoad() {
  chrome.storage.sync.get(["email", "pass"], function (result) {
    (document.getElementById("email").value = result.email),
      (document.getElementById("pass").value = result.pass);
  });
}

// Function to auto navigate to school website
function autoNav() {
  chrome.tabs.update({
    url: "https://southsuttercs.org/iemschools/website-login",
  });
  setTimeout(() => {}, 5000);
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

const portalBtn = document.getElementById("portal");

const dailyEngage = () => {
  chrome.tabs.update({
    url: "https://parentportal.ieminc.org/daily_engagement",
  });
};

const attendBtn = document.getElementsByTagName("td")[0];

const attendSubmit = document.getElementById("attSubmit");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const loginSteps = () => {
  autoFill();
  autoSave();
  subBtn.click();
};

const portalNav = () => {
  portalBtn.click();
  dailyEngage();
};

const takeAttendance = () => {
  attendBtn.click();
  attendSubmit.click();
};

// Upon load envoke function to autoload credentials
autoLoad();

// Event listener for extension button
document.getElementById("btn-start").addEventListener("click", async () => {
  setTimeout(autoNav, 5000);
  // await delay(5000);
  setTimeout(loginSteps, 5000);
  // await delay(5000);
  setTimeout(portalNav, 5000);
  // await delay(5000);
  setTimeout(takeAttendance, 5000);
});

// Add a new Promise to a new timeout for logging timeout so it will continue only after this is done.

// var i = 3
// var p = Promise.resolve(i)
// while (i > 0) {
//   (i => {
//     p = p.then(() => {
//       return new Promise((resolve) => {
//         console.log('start', i)
//         setTimeout(() => {
//           return new Promise((resolve) => {
//             setTimeout(() => {
//           	console.log('timeout')
//             	resolve()
//             }, 1000)
//           }).then(() => {
//           	console.log('end', i)
//           	resolve()
//           })
//         }, 1000)
//       })
//     })
//   })(i)
//   i--
// }
// p = p.then(data => console.log('execution ends'))
