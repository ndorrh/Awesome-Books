/* eslint-disable max-classes-per-file */
import {
  inputTitle, inputAuthor, submitBtn,
} from './Variables.js';

import
BookSet from './functions.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Book Constructor function (representing a book).
const coll = new BookSet();

if (localStorage.getItem('bookItems')) {
  const localBooks = JSON.parse(localStorage.getItem('bookItems'));
  localBooks.bookColl.forEach((item) => {
    coll.add(new Book(item.title, item.author));
  });
}
submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});
