let books = [
  { id: 1, name: "Harrypotter", available: true },
  { id: 2, name: "Python Guide", available: true },
  { id: 3, name: "The ocean", available: false }
];


function addBook() {
  let name = document.getElementById("bookName").value;

  if (name === "") {
    alert("Please enter book name");
    return;
  }

  let newBook = {
    id: books.length + 1,
    name: name,
    available: true
  };

  books.push(newBook);

  document.getElementById("bookName").value = "";
  displayBooks();
}

function displayBooks() {
  let container = document.getElementById("bookList");
  container.innerHTML = "";

  books.forEach(book => {
    let div = document.createElement("div");
    div.className = "book";

    div.innerHTML = `
      <h2>${book.name}</h2>
      <p class="${book.available ? 'available' : 'rented'}">
        ${book.available ? 'Available' : 'Rented'}
      </p>
      <button onclick="rentBook(${book.id})">Rent</button>
      <button onclick="returnBook(${book.id})">Return</button>
    `;

    container.appendChild(div);
  });
}


function rentBook(id) {
  let message = document.getElementById("message");
  message.innerText = "Processing rent request...";

  let book = books.find(b => b.id === id);

  processRent(book)
    .then(res => {
      message.innerText = res;
      displayBooks();
    })
    .catch(err => {
      message.innerText = err;
    });
}

function processRent(book) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (book.available) {
        book.available = false;
        resolve("Book rented successfully ");
      } else {
        reject("Book already rented ");
      }
    }, 2000);
  });
}


function returnBook(id) {
  let message = document.getElementById("message");
  message.innerText = "Processing return... ";

  let book = books.find(b => b.id === id);

  processReturn(book)
    .then(res => {
      message.innerText = res;
      displayBooks();
    })
    .catch(err => {
      message.innerText = err;
    });
}

function processReturn(book) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!book.available) {
        book.available = true;
        resolve("Book returned successfully ");
      } else {
        reject("Book was not rented ");
      }
    }, 2000);
  });
}


displayBooks();