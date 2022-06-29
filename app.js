let myLibrary = [];

function Book(title, author, noPages, read) {
	this.title = title;
	this.author = author;
	this.noPages = noPages;
	this.read = read;
	this.info = () => {
		let status = this.read === "yes" ? "read" : "not read yet";

		return `${this.title} by ${this.author}, ${this.noPages} pages, ${status}`;
	};
}

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
