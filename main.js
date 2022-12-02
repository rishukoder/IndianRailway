let logBtn = document.querySelector('#log-btn');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

logBtn.addEventListener('click', () => {
logBtn.classList.toggle('fa-times');

});

formBtn.addEventListener('click', () => {
loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
loginForm.classList.remove('active');


});