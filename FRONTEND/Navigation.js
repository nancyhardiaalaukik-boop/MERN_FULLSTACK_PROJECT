
const loginView = document.getElementById("login-view");
const registerView = document.getElementById("register-view");
const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");
// Switch from Login to Registration
showRegisterLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginView.hidden = true;
    registerView.hidden = false;
});
// Switch from Registration to Login
showLoginLink.addEventListener("click", function (event) {
    event.preventDefault();
    registerView.hidden = true;
    loginView.hidden = false;
});
// Show or hide password fields
document.querySelectorAll(".toggle-password").forEach(function (button) {
    button.addEventListener("click", function () {
        const passwordId =
            button.dataset.passwordTarget || "login-password";
        const passwordInput = document.getElementById(passwordId);
        const icon = button.querySelector("i");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
            button.setAttribute("aria-label", "Hide password");
        } else {
            passwordInput.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
            button.setAttribute("aria-label", "Show password");
        }
    });
});
