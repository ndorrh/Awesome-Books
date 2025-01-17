/* eslint-disable max-classes-per-file */
import {
  inputTitle, inputAuthor, bookSection,
} from './Variables.js';

class BookSet {
  // Constructor with array of books
  constructor(books = []) {
    this.books = books;
  }

  // Events =>> Add a Books
  add = (bookItem) => {
    this.books.push(bookItem);
    this.display(bookItem);
    this.remove();
    this.saveToStorage();
    inputAuthor.value = '';
    inputTitle.value = '';
  }

  remove = () => {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns[removeBtns.length - 1].addEventListener('click', (e) => {
      this.removeFromColl(e.target);
      bookSection.removeChild(e.target.parentNode);
    });
  }

  // Events =>> Display Books Dynamically
  display = (data) => {
    if (this) {
      const div = document.createElement('div');
      div.className = 'book-wraper';
      div.innerHTML = `<h4 class='m-h'>'${data.title}' by
                    ${data.author}</h4>
                    <button data-value='${data.title}-${data.author}' type='button' class ='remove-button'>Remove</button>`;
      bookSection.appendChild(div);
    }
  }

  // Remove Books
  removeFromColl = (data) => {
    const arr = data.getAttribute('data-value').split('-');
    this.books = this.books.filter(
      (item) => item.title + item.author !== arr[0] + arr[1],
    );
    this.saveToStorage();
  }

  // Saving To storage
  saveToStorage = () => {
    localStorage.setItem('bookItems', JSON.stringify({ bookColl: this.books }));
  }
}

export default BookSet;
