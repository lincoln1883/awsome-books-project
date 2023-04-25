let books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.addBookToList();
    this.removeFromList();
  }
  addBook() {
    const newBook = new Book(this.titleInput.value,
      this.authorInput.value);
    this.books.push(newBook);
    localStorage.setItem('book', JSON.stringify(this.books));
    this.addBookToList();
  }
  addBookToList() {
    bookList.innerHTML = '';

    books.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
      bookList.appendChild(bookItem);
    });
  };
  removeFromList() {
    const removeBook = (i) => {
      books.splice(i, 1);
      localStorage.setItem('book', JSON.stringify(books));
      this.addBookToList();
      this.removeFromList();
    };

    for (let i = 0; i < removeBtn.length; i += 1) {
      removeBtn[i].onclick = () => {
        removeBook(i);
      };
    }
  };
}

// form declaration

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('ul');
const bookShelf = JSON.parse(localStorage.getItem('book'));
const removeBtn = document.getElementsByClassName('remove');

if (bookShelf) {
  books = bookShelf;
} else {
  localStorage.setItem('book', JSON.stringify(books));
  bookList.innerHTML = '';
  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `${book.title} by ${book.author} <button class="remove">Remove</button>`;
    bookList.appendChild(bookItem);
  });
}

formButton.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value);
  books.push(newBook);
  localStorage.setItem('book', JSON.stringify(books));
  addBookToList();
});

const bookLists = new BookList();
const closeList = new BookList();