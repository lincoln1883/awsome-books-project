class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = JSON.parse(localStorage.getItem('books')) || [];

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('ul');

const addBookToList = () => {
  bookList.innerHTML = '';
  books.forEach((book, i) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove" data-index="${i}">Remove</button>`;
    bookList.appendChild(bookItem);
  });
};

const removeBookFromList = (i) => {
  books.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(books));
  addBookToList();
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  addBookToList();
};

const handleRemoveButtonClick = (e) => {
  if (e.target.matches('.remove')) {
    const { index } = e.target.dataset;
    removeBookFromList(index);
  }
};

formButton.addEventListener('click', handleFormSubmit);
bookList.addEventListener('click', handleRemoveButtonClick);

addBookToList();