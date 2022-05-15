function movetoSignup() {
  window.location.href = "http://127.0.0.1:5500/signUp.html";
}

function movetoLogin() {
  window.location.href = "http://127.0.0.1:5500/logIn.html";
}

var validateEmail = function (address) {
  let result = false;
  const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (pattern.test(address) === true) {
    result = true;
  }
  return result;
};

if (localStorage.getItem("users")) {
  var users = JSON.parse(localStorage.getItem("users"));
} else {
  localStorage.setItem("users", JSON.stringify([]));
  var users = JSON.parse(localStorage.getItem("users"));
}

function signup() {
  let e = document.getElementById("signup_email").value;
  let p = document.getElementById("signup_password").value;
  if (!validateEmail(e)) {
    document.getElementById("signup_email").value = "";
    document.getElementById("signup_password").value = "";
    alert("Add a valid Email");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === e) {
      document.getElementById("signup_email").value = "";
      document.getElementById("signup_password").value = "";
      alert("User already exists");
      return;
    }
  }
  if (p.length < 8) {
    document.getElementById("signup_email").value = "";
    document.getElementById("signup_password").value = "";
    alert("Password needs to be longer than 7 characters");
    return;
  }
  let user = {
    email: e,
    password: p,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("signup_email").value = "";
  document.getElementById("signup_password").value = "";
  window.location.href = "http://127.0.0.1:5500/logIn.html";
}
