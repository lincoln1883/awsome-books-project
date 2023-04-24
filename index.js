// const book = [
//   {
//     title: 'Song of Ice & fire',
//     author: 'George RR',
//   },
//   {
//     title: 'Song of Ice & fire',
//     author: 'George RR',
//   },
//   {
//     title: 'Song of Ice & fire',
//     author: 'George RR',
//   },
//   {
//     title: 'Song of Ice & fire',
//     author: 'George RR',
//   },
// ];

// form declaration

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('#submit-button');

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

	localStorage.setItem('book', JSON.stringify(newBook));
});
