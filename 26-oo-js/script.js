// Create a new instance of a Square with a sideLength of 200
const square = new Square(200)
// Render a new div with the attributes of our square instance and append it to the body
document.body.appendChild(square.render())

// Add an event listener to our form so that when we submit it, we can create a new instance of a Book with the values the user typed in and then render it in the DOM
document.querySelector(".book-form").addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.querySelector('input[name="title"]').value
  const image = document.querySelector('input[name="image"]').value
  const book = new Book(title, image)
  document.body.appendChild(book.render())
})
