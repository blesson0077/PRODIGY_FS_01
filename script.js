function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Sign up successful!");
    window.location.href = "index.html";
  } else {
    document.getElementById("signup-error").textContent = "Please fill all fields.";
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-error").textContent = "Invalid credentials.";
  }
}
