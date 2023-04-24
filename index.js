const books = [];

// form declaration

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('ul');
const bookItem = document.createElement('li')


form.addEventListener('submit', (e) => {
	e.preventDefault();
	form.submit();
});

// const BookData = { title: title.value, author: author.value };

formButton.addEventListener('click', (e) => {
	e.preventDefault();
	const newBook = {
		title: title.value,
		author: author.value,
	};
	books.push(newBook);

	localStorage.setItem('book', JSON.stringify(books));
});

const bookShelf = JSON.parse(localStorage.getItem('book'))

bookShelf.forEach((book, index) => {
	bookList.appendChild(bookItem)
	<li>${book.title} by ${book.author}</li><button class="remove">Remove</button>
});

