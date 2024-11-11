// script.js

document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", function() {
        // Toggle input type antara 'password' dan 'text'
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Ganti ikon antara 'kunci' dan 'mata'
        if (type === "text") {
            togglePassword.classList.replace("bxs-lock-alt", "bxs-show");
        } else {
            togglePassword.classList.replace("bxs-show", "bxs-lock-alt");
        }
    });
});
