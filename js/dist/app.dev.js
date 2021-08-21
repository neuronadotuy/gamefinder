"use strict";

/** @format */
var inputName = document.querySelector('#input_name');
var inputPassword = document.querySelector('#input_pass');
var btnSubmit = document.querySelector('#btn_submit');
var btnLogout = document.querySelector('#logout-btn');
var snackbar = document.querySelector('#snackbar');
var closeSnackbar = document.querySelector('.snackbar--close');
var snackbarMessage = document.querySelector('.snackbar__message');
var iconName = document.querySelector('#icon_name');
var showOrHidePassword = document.querySelector('.show-hide__icon');
var showPassword = document.querySelector('#showPassword');
var hidePassword = document.querySelector('#hidePassword');
var nameError = document.createElement('p');
var passError = document.createElement('p');
eventListeners();

function eventListeners() {
  inputName.addEventListener('blur', inputNameError);
  inputPassword.addEventListener('blur', inputPassError);
  inputName.addEventListener('focus', inputNameFocus);
  inputPassword.addEventListener('focus', inputPassFocus);
  showPassword.addEventListener('click', showPasswordFn);
  hidePassword.addEventListener('click', hidePasswordFn);
  btnSubmit.addEventListener('click', login);
  closeSnackbar.addEventListener('click', snackbarClose);
} // Show / Hide password


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
} // Add error on username blur


function inputNameError(e) {
  e.target.classList.remove('input--focus');
  e.target.parentElement.children[0].classList.remove('icon--focus');
  e.target.parentElement.children[0].children[0].classList.remove('icon__svg--focus');

  if (e.target.value.length <= 0) {
    e.target.classList.add('input_error', 'username_error');
    e.target.parentElement.children[0].classList.add('icon_error');
    e.target.parentElement.children[0].children[0].classList.add('icon-svg_error');
    e.target.parentElement.appendChild(nameError);
    nameError.classList.add('error_message');
    nameError.textContent = 'Enter a valid email';
    return;
  }
} // Add error on password blur


function inputPassError(e) {
  e.target.classList.remove('input--focus');
  e.target.parentElement.children[0].classList.remove('icon--focus');
  e.target.parentElement.children[0].children[0].classList.remove('icon__svg--focus');

  if (e.target.value.length <= 0) {
    e.target.classList.add('input_error', 'password_error');
    e.target.parentElement.children[0].classList.add('icon_error');
    e.target.parentElement.children[0].children[0].classList.add('icon-svg_error');
    e.target.parentElement.appendChild(passError);
    passError.classList.add('error_message');
    passError.textContent = 'Enter a valid password';
    return;
  }
} // Remove error on username focus


function inputNameFocus(e) {
  e.target.classList.add('input--focus');
  e.target.parentElement.children[0].classList.add('icon--focus');
  e.target.parentElement.children[0].children[0].classList.add('icon__svg--focus');
  e.target.classList.remove('input_error', 'username_error');
  e.target.parentElement.children[0].classList.remove('icon_error');
  e.target.parentElement.children[0].children[0].classList.remove('icon-svg_error');

  while (e.target.parentElement.contains(nameError)) {
    e.target.parentElement.removeChild(nameError);
  }
} // Remove error on password focus


function inputPassFocus(e) {
  e.target.classList.add('input--focus');
  e.target.parentElement.children[0].classList.add('icon--focus');
  e.target.parentElement.children[0].children[0].classList.add('icon__svg--focus');
  e.target.classList.remove('input_error', 'password_error');
  e.target.parentElement.children[0].classList.remove('icon_error');
  e.target.parentElement.children[0].children[0].classList.remove('icon-svg_error');

  while (e.target.parentElement.contains(passError)) {
    e.target.parentElement.removeChild(passError);
  }
} // friendly reminder how to start the server
// json-server db.json -m ./node_modules/json-server-auth


function snackbarError(msg) {
  snackbar.classList.add('snackbar__wrapper');
  snackbar.classList.remove('snackbar__wrapper--hidden');
  snackbar.children[0].classList.remove('snackbar--success');
  snackbar.children[0].classList.add('snackbar--error');
  snackbarMessage.innerHTML = msg;
  setTimeout(function () {
    snackbarClose();
  }, 4000);
}

function snackbarSuccess(msg) {
  snackbar.classList.add('snackbar__wrapper');
  snackbar.classList.remove('snackbar__wrapper--hidden');
  snackbar.children[0].classList.remove('snackbar--error');
  snackbar.children[0].classList.add('snackbar--success');
  snackbarMessage.innerHTML = msg;
}

function login(e) {
  var emailValidation, passValidation, email, password, re, server, req, res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          email = inputName;
          password = inputPassword;
          _context.prev = 3;
          // Username validation
          // regex
          re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!re.test(email.value.toLowerCase()) || email.value === 0) {
            emailValidation = false;
            email.classList.add('input_error', 'username_error');
            email.parentElement.children[0].classList.add('icon_error');
            email.parentElement.children[0].children[0].classList.add('icon-svg_error');
            email.parentElement.appendChild(nameError);
            nameError.classList.add('error_message');
            nameError.textContent = 'Enter a valid email';
          } else {
            emailValidation = true;
          } // Password validation


          if (password.value.trim().length <= 3) {
            passValidation = false;
            password.classList.add('input_error', 'password_error');
            password.parentElement.children[0].classList.add('icon_error');
            password.parentElement.children[0].children[0].classList.add('icon-svg_error');
            password.parentElement.appendChild(passError);
            passError.classList.add('error_message');
            passError.textContent = 'Enter a valid password';
          } else {
            passValidation = true;
          } // If Email or Password are invalid, dont call the api


          if (!(emailValidation !== true || passValidation !== true)) {
            _context.next = 11;
            break;
          }

          // snackbar error
          snackbarError('Email and password required');
          console.log(emailValidation, passValidation);
          return _context.abrupt("return");

        case 11:
          server = 'http://localhost:3000/login';
          _context.next = 14;
          return regeneratorRuntime.awrap(fetch(server, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: inputName.value,
              password: inputPassword.value
            })
          }));

        case 14:
          req = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(req.json());

        case 17:
          res = _context.sent;
          console.log(req.status);
          console.log(res); // Login success

          if (req.status === 200 && emailValidation === true && passValidation === true) {
            localStorage.setItem('JWT', res.accessToken);
            snackbarSuccess('Success');
            setTimeout(function () {
              window.location.href = 'http://localhost:5501/main.html';
            }, 2000);
          } // Login error


          if (req.status === 400 || emailValidation !== true || passValidation !== true) {
            snackbarError(res);
          }

          _context.next = 27;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 24]]);
} // Close snackbar on "X" click


function snackbarClose() {
  snackbar.classList.remove('snackbar__wrapper');
  snackbar.classList.add('snackbar__wrapper--hidden');
}