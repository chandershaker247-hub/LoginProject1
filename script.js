const VALID_USER = "admin";
const VALID_PASS = "1234";

// Called when Sign In is clicked
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!username || !password) {
    errorMsg.textContent = "Please fill in both fields.";
    return;
  }

  if (username === VALID_USER && password === VALID_PASS) {
    errorMsg.textContent = "";
    showDashboard(username);
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}

// Show dashboard, hide login
function showDashboard(username) {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboardPage").classList.remove("hidden");
  document.getElementById("welcomeUser").textContent = "Hello, " + username;
}

// Show login, hide dashboard
function handleLogout() {
  document.getElementById("dashboardPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Press Enter to login
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleLogin();
});
