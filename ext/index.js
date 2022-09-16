document.getElementById("btn-start").addEventListener("click", () => {
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
  chrome.storage.local.set(
    {
      email: email.value,
      pass: pass.value,
    },
    function () {
      console.log("Email and Password Saved " + email + " " + pass);
    }
  );
});

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
