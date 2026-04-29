const BASE_URL = "http://localhost:3000";
let books = [];


async function fetchBooks() {
  try {
    let res = await fetch(`${BASE_URL}/books`);
    books = await res.json();
    displayBooks();
  } catch (error) {
    document.getElementById("message").innerText = "Error loading books";
  }
}

// =========================
// DISPLAY BOOKS
// =========================
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

// =========================
// ADD BOOK
// =========================
async function addBook() {
  let name = document.getElementById("bookName").value;

  if (name.trim() === "") {
    alert("Please enter book name");
    return;
  }

  try {
    await fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    document.getElementById("bookName").value = "";
    fetchBooks();

  } catch (error) {
    document.getElementById("message").innerText = "Error adding book";
  }
}

// =========================
// RENT BOOK
// =========================
async function rentBook(id) {
  let message = document.getElementById("message");
  message.innerText = "Processing rent...";

  try {
    let res = await fetch(`${BASE_URL}/rent/${id}`, {
      method: "POST"
    });

    let data = await res.json();
    message.innerText = data.message;

    fetchBooks();

  } catch (error) {
    message.innerText = "Error renting book";
  }
}

// =========================
// RETURN BOOK
// =========================
async function returnBook(id) {
  let message = document.getElementById("message");
  message.innerText = "Processing return...";

  try {
    let res = await fetch(`${BASE_URL}/return/${id}`, {
      method: "POST"
    });

    let data = await res.json();
    message.innerText = data.message;

    fetchBooks();

  } catch (error) {
    message.innerText = "Error returning book";
  }
}

// =========================
// INITIAL LOAD
// =========================
fetchBooks();