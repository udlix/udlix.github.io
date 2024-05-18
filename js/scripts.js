// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    var loginModal = document.getElementById('loginModal');
    var closeBtn = document.querySelector('.modal .close');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
