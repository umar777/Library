let myLibrary = [];

function Books(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Books(title, author, pages);
  myLibrary.push(newBook);
}

function displayBooks() {
  //Getting the list
  const bookList = document.getElementById("list");
  bookList.innerHTML = "";
  //Looping throught the Library Array
  myLibrary.forEach((book) => {
    //Creating a Card
    const card = document.createElement("div");
    card.style.width = "100px";
    card.style.height = "100px";
    //Creating fields for each book attribute and appending it to the card
    const bookTitle = document.createElement("div");
    bookTitle.textContent = book.title;
    card.appendChild(bookTitle);
    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = book.author;
    card.appendChild(bookAuthor);
    const bookPages = document.createElement("div");
    bookPages.textContent = book.pages;
    card.appendChild(bookPages);

    //Appending the card element to list
    bookList.appendChild(card);
  });
}

function addNewBook() {
  const bookForm = document.getElementById("bookForm");
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("book-pages").value;
    addBookToLibrary(title, author, pages);
    displayBooks();
    bookForm.reset();
  });
}

addNewBook();

const addButton = document.getElementById("btn");
addButton.addEventListener("click", (e) => {
  addNewBook();
  displayBooks();
});
