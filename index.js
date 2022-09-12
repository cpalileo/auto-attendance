fetch("https://southsuttercs.org/iemschools/website-login")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return promise.reject(response);
    }
  })
  .then(function (data) {
    openWindow();
    fillForms(data);
    console.log(data);
  })
  .catch(function (err) {
    console.warn("Error ", err);
  });

function fillForms(data) {
  console.log(
    "This is the fillForms function. You will use this function to input the credentials into the login fields."
  );
}

// const startBtn = document.getElementById("start-btn");

// function openWindow() {
//   window.open(
//     "https://southsuttercs.org/iemschools/website-login",
//     "chromeTab"
//   );
// }
