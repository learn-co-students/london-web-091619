// Define our base URI - the URL of every request we make will start with this.
const baseURI = "http://localhost:3000/books"

// Make a GET request to /books (Index route) in order to get back every book and return the JSON retrieved from the promise value - we will pass that on to another method later.
function fetchBooks() {
  return fetch(baseURI)
    .then(function(response){
      return response.json()
    })
}

// Fetch the array of book objects from the database and pass it to a function which iterates through them and passes each one into a function called renderBook.
function renderBooks() {
  fetchBooks()
    .then(function(books){
      for (let i = 0; i < books.length; i++) {
        renderBook(books[i])
      }
    })
}


function renderBook(book) {
  // Create the div with a class of card that will contain the information of this book.
  const card = document.createElement("div")
  card.classList.add("card")
  // Create img, h3 and p tags inside the div and inject into them the value of this book's img url, title and author respectively.
  card.innerHTML = `
  <img src="${book.img}">
  <h3>${book.title}</h3>
  <p>${book.author}</p>
  <button type="button" id="${book.id}">Delete Button</button>
  ` // Create a button with an id of the book's id, so that when we the user clicks on it, we'll know which book to delete.

  // Grab the div with the id of book-list and append our newly created book to it.
  const bookList = document.querySelector("#book-list")
  bookList.appendChild(card)
  // Add a click event listener to the button inside the div we just appended to the page.
  document.querySelector(`button[id="${book.id}"]`).addEventListener("click", deleteBook)
}

// Add an event listener so that when our form is submitted, we will create a new book with the information in the form.
const form = document.querySelector("#new-book-form")
form.addEventListener("submit", function(e){
  e.preventDefault()
  // Create a new book object and set its attributes to be the values of the relevant input fields.
  const newBook = {
    title: document.querySelector('input[name="title"]').value,
    author: document.querySelector('input[name="author"]').value,
    img: document.querySelector('input[name="cover"]').value
  }
  // We communicate with the server first. When the book is created and the promise is resolved, we then take the newly created book object it returned to us and pass it as an argument to renderBook in order to add it to the DOM.
  createBook(newBook)
    .then(function(book){
      renderBook(book)
    })
})

// Tell to server to save our newly created book in the database.
function createBook(newBook) {
  // Create our configuration object to allow us to make a POST request with the correct headers. The body will be the book object we have created and passed to this function as an argument.
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newBook)
  }
  // Make the POST request to the server using our configurationObject, adding the new book to our database and return the Promise with .json called on it, which will be the newly created book object from the database.
  return fetch(baseURI, configurationObject)
    .then(function(response){
      return response.json()
    })
}

function deleteBook(e) {
  // Again, we communicate with the server first. Once the book has been successfully deleted from the database and the promise resolved, we then remove it from the DOM.
  destroyBook(e)
    .then(function(book){
      // Access the target of the click event (the button we clicked). Then grab that element's parent (the div it is a child of, which contains all of the book's information). We then remove that element from the DOM.
      e.target.parentElement.remove()
    })
}

function destroyBook(e) {
  // Make a request to the correct URL by concatenating the base URI and the value of the clicked button's id attribute, along with a configuration object that allows us to make a DELETE request.
  return fetch(`${baseURI}/${e.target.getAttribute("id")}`, { method: "DELETE"})
    .then(function(response){
      return response.json()
    })
}

// Fetch all of the books in our database and add them to the DOM.
renderBooks()
