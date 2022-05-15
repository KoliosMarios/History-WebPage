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
  let n = document.getElementById("signup_user_first_name").value;
  let l = document.getElementById("signup_user_last_name").value;

  if (!validateEmail(e)) {
    alert("Add a valid Email");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === e) {
      alert("User already exists");
      return;
    }
  }
  if (p.length < 8) {
    alert("Password needs to be longer than 7 characters");
    return;
  }
  let user = {
    email: e,
    password: p,
    name: n,
    lastname: l,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "http://127.0.0.1:5500/logIn.html";
}

function login() {
  var users = JSON.parse(localStorage.getItem("users"));
  let e = document.getElementById("login_email").value;
  let p = document.getElementById("login_password").value;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === e) {
      if (users[i].password === p) {
        localStorage.setItem("loggedUser", JSON.stringify(users[i]));
        window.location.href = "http://127.0.0.1:5500/profile.html";
        displayUser();
        return;
      } else {
        alert("Wrong Password");
        return;
      }
    }
  }
  alert("The Email does not exist!");
}

function disconnect() {
  localStorage.removeItem("loggedUser");
  window.location.href = "http://127.0.0.1:5500/logIn.html";
}

function displayUser() {
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById(
    "user_name"
  ).innerHTML = `<p>${loggedUser.name} ${loggedUser.lastname}</p>`;
}
displayUser();
