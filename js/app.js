/** @format */
const inputName = document.querySelector('#input_name');
const inputPassword = document.querySelector('#input_pass');
const btnSubmit = document.querySelector('#btn_submit');
const btnLogout = document.querySelector('#logout-btn');
const snackbar = document.querySelector('#snackbar');
const closeSnackbar = document.querySelector('.snackbar--close');
const snackbarMessage = document.querySelector('.snackbar__message');
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
	inputPassword.addEventListener('blur', inputPassError);

	inputName.addEventListener('focus', inputNameFocus);
	inputPassword.addEventListener('focus', inputPassFocus);

	showPassword.addEventListener('click', showPasswordFn);
	hidePassword.addEventListener('click', hidePasswordFn);
	btnSubmit.addEventListener('click', login);
	closeSnackbar.addEventListener('click', snackbarClose);
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
// Add error on username blur
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

// Add error on password blur
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
	while (e.target.parentElement.contains(nameError)) {
		e.target.parentElement.removeChild(nameError);
	}
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
	while (e.target.parentElement.contains(passError)) {
		e.target.parentElement.removeChild(passError);
	}
}

// friendly reminder how to start the server
// json-server db.json -m ./node_modules/json-server-auth

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
		console.log(req.status);
		console.log(res);

		// https://blog.logrocket.com/jwt-authentication-best-practices/

		// Username validation
		// regex
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

		// Password validation
		if (password.value.trim().length <= 3) {
			passValidation = false;
			password.classList.add('input_error', 'password_error');
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

		// Login success
		if (
			req.status === 200 &&
			emailValidation === true &&
			passValidation === true
		) {
			localStorage.setItem('JWT', res.accessToken);
			snackbar.classList.add('snackbar__wrapper');
			snackbar.classList.remove('snackbar__wrapper--hidden');
			snackbar.children[0].classList.remove('snackbar--error');
			snackbar.children[0].classList.add('snackbar--success');
			snackbarMessage.innerHTML = 'Success';
			setTimeout(() => {
				window.location.href = 'http://localhost:5501/main.html';
			}, 2000);
		}

		// Login error
		if (
			req.status === 400 ||
			emailValidation !== true ||
			passValidation !== true
		) {
			console.log('Error');
			snackbar.classList.add('snackbar__wrapper');
			snackbar.classList.remove('snackbar__wrapper--hidden');
			snackbar.children[0].classList.remove('snackbar--success');
			snackbar.children[0].classList.add('snackbar--error');
			snackbarMessage.innerHTML = `${res ? res : 'Server Disconnected'}`;
		}
	} catch (error) {
		console.log(error);
	}
}

// Close snackbar on "X" click
function snackbarClose() {
	snackbar.classList.remove('snackbar__wrapper');
	snackbar.classList.add('snackbar__wrapper--hidden');
}
