let books = [];

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
// function to add a book

const addBookToList = () => {
  bookList.innerHTML = '';

  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
    bookList.appendChild(bookItem);
  });
};
addBookToList();

const removeFromList = () => {
  const removeBook = (i) => {
    books.splice(i, 1);
    localStorage.setItem('book', JSON.stringify(books));
    addBookToList();
    removeFromList();
  };

  for (let i = 0; i < removeBtn.length; i += 1) {
    removeBtn[i].onclick = () => {
      removeBook(i);
    };
  }
};
removeFromList();

formButton.addEventListener('click', () => {
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);
  localStorage.setItem('book', JSON.stringify(books));
  addBookToList();
});