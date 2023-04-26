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

  handleFormSubmit(e) {
    e.preventDefault();
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

const sections = document.getElementsByClassName('sections')
const navList = document.getElementsByClassName('nav-item');



for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', () => {
    sections[i].classList.add('display');
    navList[i].classList.add('active');
    for (let j = 0; j < navList.length; j++) {
      if (i != j) {
        sections[j].classList.remove("display");
        sections[j].classList.add('hidden');
        navList[j].classList.remove('active');
      }
    }
  })
}



