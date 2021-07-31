/** @format */
const inputName = document.querySelector('#input_name');
const inputPassword = document.querySelector('#input_pass');
const btnSubmit = document.querySelector('#btn_submit');
const btnLogout = document.querySelector('#logout');

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

// friendly reminder how to start the server
// json-server db.json -m ./node_modules/json-server-auth

//Regex
const re =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

async function login(e) {
	e.preventDefault();
	const email = inputName;
	const password = inputPassword;
	const server = 'http://localhost:3000/login';

	let emailValidation;
	let passValidation;

	try {
		const req = await fetch(server, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email.value, password: password.value }),
		});
		const res = await req.json();

		// Username validation
		if (!re.test(email.value.toLowerCase()) || email.value === 0) {
			emailValidation = false;
			email.classList.add('input_error', 'username_error');
			email.parentElement.children[0].classList.add('icon_error');
			email.parentElement.children[0].children[0].classList.add(
				'icon-svg_error'
			);

			email.parentElement.appendChild(nameError);
			nameError.classList.add('error_message');
			nameError.textContent = 'Enter a valid email';
			console.log(emailValidation);
		} else {
			emailValidation = true;
			console.log(emailValidation);
		}

		// Username validation
		if (password.value.trim().length <= 3) {
			passValidation = false;
			password.classList.add('input_error', 'username_error');
			password.parentElement.children[0].classList.add('icon_error');
			password.parentElement.children[0].children[0].classList.add(
				'icon-svg_error'
			);

			password.parentElement.appendChild(passError);
			passError.classList.add('error_message');
			passError.textContent = 'Enter a valid email';
			console.log(emailValidation);
		} else {
			passValidation = true;
			console.log(emailValidation);
		}

		// localStorage.setItem('JWT', res.accessToken);
		// window.location.href = 'http://localhost:5501/main.html';
		console.log(res);
	} catch (error) {
		console.log(error);
	}
}

// if (localStorage.getItem('JWT')) {
// 	window.location.href = 'http://localhost:5501/main.html';
// }

const logout = () => {
	localStorage.removeItem('JWT');
};
