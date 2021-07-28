/** @format */
const inputName = document.querySelector('#input_name');
const inputPassword = document.querySelector('#input_pass');
const btnSubmit = document.querySelector('#btn_submit');
const iconName = document.querySelector('#icon_name');
const showPass = document.querySelector('#showhide');
// const errorField = document.querySelector('.error_message');
const nameError = document.createElement('p');
const passError = document.createElement('p');

eventListeners();
function eventListeners() {
	// document.addEventListener('DOMContentLoaded', startApp);
	inputName.addEventListener('blur', inputNameError);
	inputName.addEventListener('focus', inputNameFocus);
	inputPassword.addEventListener('blur', inputPassError);
	inputPassword.addEventListener('focus', inputPassFocus);
	showPass.addEventListener('click', showPassword);
}

// function startApp() {
// 	console.log('iniciando...');
// }

// Username input validation
function inputNameError(e) {
	if (e.target.value.length <= 0) {
		e.target = inputName;
		inputName.classList.add('input_error', 'username_error');
		const inputNameIcon = inputName.parentElement.children[0];
		inputNameIcon.classList.add('icon_error');
		inputNameIcon.children[0].classList.add('icon-svg_error');

		inputName.parentElement.appendChild(nameError);
		nameError.classList.add('error_message');
		nameError.textContent = 'Enter a valid email';
		return;
	} else {
		console.log(inputName.value);
	}
}

// Password input validation
function inputPassError(e) {
	if (e.target.value.length <= 0) {
		e.target = inputPassword;
		inputPassword.classList.add('input_error', 'password_error');
		const inputPasswordIcon = inputPassword.parentElement.children[0];
		inputPasswordIcon.classList.add('icon_error');
		inputPasswordIcon.children[0].classList.add('icon-svg_error');

		inputPassword.parentElement.appendChild(passError);
		passError.classList.add('error_message');
		passError.textContent = 'Enter a valid password';
		return;
	} else {
		console.log(inputPassword.value);
	}
}

// Remove error on username focus
function inputNameFocus(e) {
	e.target.classList.remove('input_error', 'username_error');
	e.target.parentElement.children[0].classList.remove('icon_error');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon-svg_error'
	);
	e.target.parentElement.removeChild(nameError);
}

// Remove error on password focus
function inputPassFocus(e) {
	e.target.classList.remove('input_error', 'password_error');
	e.target.parentElement.children[0].classList.remove('icon_error');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon-svg_error'
	);
	e.target.parentElement.removeChild(passError);
}

function showPassword(e) {
	console.log(e.target.parentElement);
}
