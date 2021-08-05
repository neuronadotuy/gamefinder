/** @format */

const alignHorizontal = document.querySelector('.alignment__icon--horizontal');
const alignVertical = document.querySelector('.alignment__icon--vertical');
const cardsWrapper = document.querySelector('.cards__wrapper');
const cardInfo = document.querySelector('#card-info');
const cardImg = document.querySelector('.card__img');

eventListeners();
function eventListeners() {
	alignHorizontal.addEventListener('click', alignHorizontalFn);
	alignVertical.addEventListener('click', alignVerticalFn);
}

function alignHorizontalFn(e) {
	while (e.target.parentElement.classList.contains('alignment__icon--offset')) {
		e.target.parentElement.classList.remove('alignment__icon--offset');
		alignVertical.classList.add('alignment__icon--offset');
	}
	while (cardsWrapper.classList.contains('cards__wrapper--vertical')) {
		cardsWrapper.classList.remove('cards__wrapper--vertical');
		cardsWrapper.classList.add('cards__wrapper');
	}
	while (cardInfo.classList.contains('card__info--vertical')) {
		cardInfo.classList.remove('card__info--vertical');
		cardInfo.classList.add('card__info');
	}
	while (cardImg.classList.contains('card__img--vertical')) {
		cardImg.classList.remove('card__img--vertical');
		cardImg.classList.add('card__img');
	}
}

function alignVerticalFn(e) {
	while (e.target.parentElement.classList.contains('alignment__icon--offset')) {
		e.target.parentElement.classList.remove('alignment__icon--offset');
	}
	alignHorizontal.classList.add('alignment__icon--offset');
	while (cardsWrapper.classList.contains('cards__wrapper')) {
		cardsWrapper.classList.remove('cards__wrapper');
	}
	cardsWrapper.classList.add('cards__wrapper--vertical');
	cardInfo.classList.add('card__info--vertical');
	while (cardInfo.classList.contains('card__info')) {
		cardInfo.classList.remove('card__info');
	}
	while (cardImg.classList.contains('card__img')) {
		cardImg.classList.remove('card__img');
		cardImg.classList.add('card__img--vertical');
	}
}
