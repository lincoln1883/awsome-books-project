const books = [{
    title: 'first',
    author: 'name'
},
{
    title: 'second',
    author: 'name'
},
{
    title: 'third',
    author: 'name'
}
];

// form declaration

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('ul');
const bookShelf = JSON.parse(localStorage.getItem('book'));


form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.submit();
});

window.onload = () => {
    books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
        bookList.appendChild(bookItem);
    });

}

// const BookData = { title: title.value, author: author.value };

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
function addBookToList(books) {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `${books.title} by ${books.author}<button class="remove">Remove</button>`;
    bookList.appendChild(bookItem);
}



// bookShelf.forEach((book, index) => {
//     const bookItem = document.createElement('li')
//     bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove">Remove</button>`;
//     bookList.appendChild(bookItem);
// });



