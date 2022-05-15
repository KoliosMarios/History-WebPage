let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
if (!loggedUser) {
  window.location.href = "http://127.0.0.1:5500/logIn.html";
}