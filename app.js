let myLibrary = [];

function Book(title, author, noPages, read) {
	this.title = title;
	this.author = author;
	this.noPages = noPages;
	this.read = read;
	this.status = read === "yes" ? "read" : "not read yet";
}

Book.prototype.info = () =>
	`${this.title} by ${this.author}, ${this.noPages} pages, ${this.status}`;

function addBookToLibrary(book) {
	myLibrary.push(book);
}

const hobbit = new Book("hobbit", "JRR TOLKIEN", 256, "no");
const harryPotter = new Book("harry potter", "JK ROWLING", 400, "yes");
const threeBodyProblem = new Book(
	"Three Body Problem",
	"xio lin yee",
	500,
	"yes"
);
addBookToLibrary(hobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(threeBodyProblem);

const divMainContainer = document.querySelector(".main-container");

const createElementWithClass = (func, className) => {
	const element = document.createElement(func);
	element.classList.add(className);

	return element;
};

const createBook = (book) => {
	const name = book.title.replace(/\s/g, "_");

	const div = createElementWithClass("div", name);
	div.classList.add("book");
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

	div.appendChild(divStatus);

	console.log(divMainContainer);

	divMainContainer.appendChild(div);
};

const displayLibrary = () => {
	for (const book in myLibrary) {
		createBook(myLibrary[book]);
	}
};

displayLibrary();
