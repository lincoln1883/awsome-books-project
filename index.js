const books = [
  {
    title: 'first',
    author: 'name',
  },
  {
    title: 'second',
    author: 'name',
  },
  {
    title: 'third',
    author: 'name',
  },
];

// form declaration

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.submit();
});

// load each book form the local array

const removeBook = (bookItem) => {
  const removeBtn = bookItem.querySelector('.remove');
  removeBtn.addEventListener('click', () => {
    books.forEach((book, index) => {
      if (book.title === bookItem.textContent.split('by')[0].trim()) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
    });
    bookItem.remove();
  });
};

window.onload = () => {
  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `${book.title} by ${book.author} <button class="remove">Remove</button>`;
    bookList.appendChild(bookItem);
    removeBook(bookItem);
  });
};

const addBookToList = (books) => {
  const bookItem = document.createElement('li');
  bookItem.innerHTML = `${books.title} by ${books.author} <button class="remove">Remove</button>`;
  bookList.appendChild(bookItem);
  removeBook(bookItem);
};

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };

  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  addBookToList(newBook);
});
 //////
//  let books = [];

// // form declaration

// const form = document.querySelector('#form');
// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const formButton = document.querySelector('#submit-button');
// const bookList = document.querySelector('ul');
// const bookShelf = JSON.parse(localStorage.getItem('book'));
// const removeBtn = document.getElementsByClassName('remove');



// if (bookShelf) {
//     books = bookShelf;
// } else {
//     localStorage.setItem('book', JSON.stringify(books));
//     bookList.innerHTML = '';
//     books.forEach((book) => {
//         const bookItem = document.createElement('li')
//         bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
//         bookList.appendChild(bookItem);
//     });
// }



// formButton.addEventListener('click', () => {
//     const newBook = {
//         title: title.value,
//         author: author.value,
//     };
//     books.push(newBook);
//     localStorage.setItem('book', JSON.stringify(books));
//     addBookToList();
// });


// function addBookToList() {
//     bookList.innerHTML = '';

//     books.forEach((book) => {
//         const bookItem = document.createElement('li')
//         bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
//         bookList.appendChild(bookItem);
//     });
// }
// addBookToList();

// function removeFromList() {
//     for (let i = 0; i < removeBtn.length; i++) {
//         removeBtn[i].onclick = () => {
//             books.splice(i, 1);
//             books = bookShelf;
//             localStorage.setItem('book', JSON.stringify(books));
//             addBookToList();
//             removeFromList();
//         }

//     }
// }
// removeFromList();