const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  window.open(
    "https://southsuttercs.org/iemschools/website-login",
    "chromeTab"
  );

  document.querySelector('text["username"]').value += "text to insert";

  // add user name to id #username
  // add password to id #password
  // click button with class .btn btn-primary btn-block
});
