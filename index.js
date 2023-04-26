const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-display');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = Book.getBooks() || [];
  }

  static getBooks() {
    const bookInfo = localStorage.getItem('books');
    if (bookInfo !== null && bookInfo !== undefined) {
      return JSON.parse(bookInfo);
    }
    return [];
  }

  addBookToList() {
    bookList.innerHTML = '';
    if (Array.isArray(this.books)) {
      this.books.forEach((book, i) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-list');
        bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove" data-index="${i}">Remove</button>`;
        bookList.appendChild(bookItem);
      });
    }
  }

  removeBookFromList(i) {
    this.books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.addBookToList();
  }

  handleFormSubmit() {
    const title = titleInput.value;
    const author = authorInput.value;
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.addBookToList();
  }

  handleRemoveButtonClick(e) {
    if (e.target.matches('.remove')) {
      const {
        index,
      } = e.target.dataset;
      this.removeBookFromList(index);
    }
  }
}

const myBook = new Book();

formButton.addEventListener('click', (e) => myBook.handleFormSubmit(e));
bookList.addEventListener('click', (e) => myBook.handleRemoveButtonClick(e));
myBook.addBookToList();

const sections = document.getElementsByClassName('sections');
const navList = document.getElementsByClassName('nav-item');

for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', () => {
    sections[i].classList.add('display');
    navList[i].classList.add('active');
    for (let j = 0; j < navList.length; j += 1) {
      if (i !== j) {
        sections[j].classList.remove('display');
        sections[j].classList.add('hidden');
        navList[j].classList.remove('active');
      }
    }
  });
}

const main = document.querySelector('main');
const timeSlot = document.createElement('p');
const section = document.querySelector('section');
timeSlot.classList.add('localTime');

const date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

const timeOfDay = hour >= 12 ? 'pm' : 'am';
hour %= 12;
hour = hour || 12;
minute = minute < 10 ? `0${minute}` : minute;
const time = `${hour}:${minute} ${timeOfDay}`;
const formattedDate = `${month} ${day}, ${year} ${time}`;

timeSlot.innerHTML = formattedDate;
main.insertBefore(timeSlot, section);