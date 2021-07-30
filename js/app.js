/** @format */
const inputName = document.querySelector('#input_name');
const inputPassword = document.querySelector('#input_pass');
const btnSubmit = document.querySelector('#btn_submit');

const iconName = document.querySelector('#icon_name');
const showOrHidePassword = document.querySelector('.show-hide__icon');
const showPassword = document.querySelector('#showPassword');
const hidePassword = document.querySelector('#hidePassword');
const nameError = document.createElement('p');
const passError = document.createElement('p');

eventListeners();
function eventListeners() {
	// document.addEventListener('DOMContentLoaded', startApp);
	inputName.addEventListener('blur', inputNameError);
	inputName.addEventListener('focus', inputNameFocus);
	inputPassword.addEventListener('blur', inputPassError);
	inputPassword.addEventListener('focus', inputPassFocus);

	showPassword.addEventListener('click', showPasswordFn);
	hidePassword.addEventListener('click', hidePasswordFn);
	btnSubmit.addEventListener('click', login);
}

// Show / Hide password
function showPasswordFn() {
	inputPassword.type = 'text';
	while (hidePassword.classList.contains('hidePassword')) {
		hidePassword.classList.remove('hidePassword');
	}
	showPassword.classList.add('showPassword');
}

function hidePasswordFn() {
	inputPassword.type = 'password';
	while (showPassword.classList.contains('showPassword')) {
		showPassword.classList.remove('showPassword');
	}
	hidePassword.classList.add('hidePassword');
}
// Username input validation
function inputNameError(e) {
	e.target.classList.remove('input--focus');
	e.target.parentElement.children[0].classList.remove('icon--focus');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon__svg--focus'
	);

	if (e.target.value.length <= 0) {
		e.target.classList.add('input_error', 'username_error');
		e.target.parentElement.children[0].classList.add('icon_error');
		e.target.parentElement.children[0].children[0].classList.add(
			'icon-svg_error'
		);

		e.target.parentElement.appendChild(nameError);
		nameError.classList.add('error_message');
		nameError.textContent = 'Enter a valid email';
		return;
	} else {
		console.log(inputName.value);
	}
}

// Password input validation
function inputPassError(e) {
	e.target.classList.remove('input--focus');
	e.target.parentElement.children[0].classList.remove('icon--focus');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon__svg--focus'
	);

	if (e.target.value.length <= 0) {
		e.target.classList.add('input_error', 'password_error');
		e.target.parentElement.children[0].classList.add('icon_error');
		e.target.parentElement.children[0].children[0].classList.add(
			'icon-svg_error'
		);

		e.target.parentElement.appendChild(passError);
		passError.classList.add('error_message');
		passError.textContent = 'Enter a valid password';
		return;
	}
}

// Remove error on username focus
function inputNameFocus(e) {
	e.target.classList.add('input--focus');
	e.target.parentElement.children[0].classList.add('icon--focus');
	e.target.parentElement.children[0].children[0].classList.add(
		'icon__svg--focus'
	);
	e.target.classList.remove('input_error', 'username_error');
	e.target.parentElement.children[0].classList.remove('icon_error');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon-svg_error'
	);
	e.target.parentElement.removeChild(nameError);
}

// Remove error on password focus
function inputPassFocus(e) {
	e.target.classList.add('input--focus');
	e.target.parentElement.children[0].classList.add('icon--focus');
	e.target.parentElement.children[0].children[0].classList.add(
		'icon__svg--focus'
	);
	e.target.classList.remove('input_error', 'password_error');
	e.target.parentElement.children[0].classList.remove('icon_error');
	e.target.parentElement.children[0].children[0].classList.remove(
		'icon-svg_error'
	);
	e.target.parentElement.removeChild(passError);
}

// start server
// json-server db.json -m ./node_modules/json-server-auth

async function login(e) {
	e.preventDefault();
	const email = inputName.value;
	const password = inputPassword.value;
	const server = 'http://localhost:3000/login';

	const req = await fetch(server, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email: email, password: password }),
	});
	const res = await req.json();
	console.log(res);
}
