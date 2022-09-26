/* eslint-disable max-classes-per-file */
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');
const dateVisit = document.querySelector('.userDate');
const listLink = document.querySelector('.books');
const booksAddition = document.querySelector('.bookAdded');
const contactUs = document.querySelector('.contactUs');
const navigator = document.querySelectorAll('.book-nav');

export {
  inputTitle, inputAuthor, submitBtn, bookSection, listLink, booksAddition, contactUs, navigator,
  dateVisit,
};