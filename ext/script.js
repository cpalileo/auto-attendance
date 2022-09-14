document.getElementById("username").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        username: getElementById("email").value,
        password: getElementById("pass").value,
      },
      function (response) {
        console.log(response.status);
      }
    );
  });
});

document.getElementById("save").addEventListener("click", () => {
  chrome.storage.sync.set(
    {
      username: getElementById("email").value,
      password: getElementById("pass").value,
    },
    function () {
      console.log("Saved");
    }
  );
});

//Refactoring needed.  Have login credentials auto save and auto load with click of one button
