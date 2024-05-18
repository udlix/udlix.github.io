// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    var registerButton = document.getElementById('registerButton');
    var showRegisterButton = document.getElementById('showRegisterButton');
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    var closeButtons = document.querySelectorAll('.modal .close');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    showRegisterButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
