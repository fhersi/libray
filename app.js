const divMainContainer = document.querySelector(".main-container");
const divCards = document.querySelector(".cards");
const btnAddBook = document.querySelector("button.createBook");
const btnCreateBook = document.querySelector(".create-book");

const modal = document.querySelector(".modal");

btnCreateBook.addEventListener("click", () => {
	formInput();

	document.querySelector(".form-title").value = "";
	document.querySelector(".form-author").value = "";
	document.querySelector(".form-pageInfo").value = "";
	document.querySelector(".form-read").checked = "";

	divCards.style.display = "flex";
	modal.style.display = "none";
});

btnAddBook.addEventListener("click", () => {
	divCards.style.display = "none";
	modal.style.display = "block";
});

let myLibrary = [];
function Book(title, author, noPages, read) {
	this.title = title;
	this.author = author;
	this.noPages = noPages;
	this.read = read;
	this.status = read ? "read" : "not read yet";
}

Book.prototype.info = () =>
	`${this.title} by ${this.author}, ${this.noPages} pages, ${this.status}`;

function addBookToLibrary(book) {
	myLibrary.push(book);
}

const hobbit = new Book("hobbit", "JRR TOLKIEN", 256, false);
const harryPotter = new Book("harry potter", "JK ROWLING", 400, true);
const threeBodyProblem = new Book(
	"Three Body Problem",
	"xio lin yee",
	500,
	true
);
addBookToLibrary(hobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(threeBodyProblem);

const createElementWithClass = (func, className) => {
	const element = document.createElement(func);
	element.classList.add(className);

	return element;
};

const createBook = (book) => {
	const name = book.title.replace(/\s/g, "_");

	const div = createElementWithClass("div", name);
	div.classList.add("book");
	div.id = book.index;
	const title = createElementWithClass("span", "title");
	title.textContent = book.title;
	div.appendChild(title);
	const author = createElementWithClass("span", "author");
	author.textContent = book.author;
	div.appendChild(author);
	const divStatus = createElementWithClass("div", "status");
	const pages = createElementWithClass("span", "pageInfo");
	pages.textContent = `${book.noPages} Pages`;
	divStatus.appendChild(pages);
	const bookStatus = createElementWithClass("span", "status");
	bookStatus.textContent = book.status;
	divStatus.appendChild(bookStatus);
	const btnRemove = createElementWithClass("button", "btn-remove");
	btnRemove.textContent = "remove book";
	divStatus.appendChild(btnRemove);

	div.appendChild(divStatus);

	divCards.appendChild(div);
};

const formInput = () => {
	let title = document.querySelector(".form-title").value;
	let author = document.querySelector(".form-author").value;
	let pageInfo = document.querySelector(".form-pageInfo").value;
	let isRead = document.querySelector(".form-read").checked;

	let newBook = new Book(title, author, pageInfo, isRead);

	let index = myLibrary.push(new Book(title, author, pageInfo, isRead)) - 1;

	newBook.index = index;

	console.log(newBook);
	createBook(newBook);
	btnRemoveAddEventListner();

	//createBook(new Book(title, author, pageInfo, isRead));
};

const displayLibrary = () => {
	for (const book in myLibrary) {
		myLibrary[book].index = book;
		createBook(myLibrary[book]);
	}
};

displayLibrary();

const btnRemoveAddEventListner = () => {
	const btnRemoveBook = document.querySelectorAll(".btn-remove");
	for (let btn of btnRemoveBook) {
		btn.addEventListener("click", (e) => {
			let index = e.path[2].id;
			const element = document.getElementById(index);
			element.remove();
			myLibrary.splice(index, 1);

			updateIndex();
		});
		//console.log(element);
	}
};

const updateIndex = () => {
	for (let book in myLibrary) {
		document.getElementById(myLibrary[book].index).id = book;
		myLibrary[book].index = book;
	}
	console.log(myLibrary);
};
