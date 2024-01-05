const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Show/hide forms
const showSignupForm = () => {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
};

const showLoginForm = () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
};

// Toggle forms on link clicks
document.querySelectorAll('.switch-to-login a').forEach(link => {
    link.addEventListener('click', showLoginForm);
});

document.querySelectorAll('.switch-to-signup a').forEach(link => {
    link.addEventListener('click', showSignupForm);
});

// Basic validation for signup form
signupForm.addEventListener('submit', (event) => {
    // ... validation code from previous response ...
});