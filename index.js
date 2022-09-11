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
    fillforms(data);
    console.log(data);
  })
  .catch(function (err) {
    console.warn("Error ", err);
  });

const startBtn = document.getElementById("start-btn");

// function openWindow() {
//   window.open(
//     "https://southsuttercs.org/iemschools/website-login",
//     "chromeTab"
//   );
// }
