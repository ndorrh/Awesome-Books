/* eslint-disable max-classes-per-file */
import {
  listLink, booksAddition, contactUs, navigator,
} from './Variables.js';

// Navigation
navigator.forEach((n, index) => n.addEventListener('click', () => {
  navigator.forEach((link, number) => {
    if (number === index) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  if (index === 0) {
    listLink.classList.remove('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.add('hidden');
  } else if (index === 1) {
    listLink.classList.add('hidden');
    booksAddition.classList.remove('hidden');
    contactUs.classList.add('hidden');
  } else {
    listLink.classList.add('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.remove('hidden');
  }
}));