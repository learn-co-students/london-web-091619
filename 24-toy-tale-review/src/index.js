let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })
  const baseURI = "http://localhost:3000/toys"

  // Fetch all the toys from the database
  function fetchToys() {
    return fetch(baseURI)
      .then(function(response){
        return response.json()
      })
  }

  function renderToys() {
    fetchToys()
      .then(function(toys){
          // Iterate through all of the toys and render each one
          for (let i = 0; i < toys.length; i++) {
            renderToy(toys[i])
          }
      })
  }

  function renderToy(toy) {
    // Create a div with a class of card
    const card = document.createElement("div")
    card.classList.add("card")
    // Populate the card div with:
    // A h2 containing the toy's name
    // An img with an src of the toy's image and a class of toy-avatar
    // A p containing that toy's number of likes
    // A button containing the text Like <3 with a class of like-btn and an id of that toy's id
    card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar">
    <p>${toy.likes}</p>
    <button class="like-btn" id="${toy.id}">Like <3</button>
    `
    // Append the new card div to the toy-collection div
    document.querySelector("#toy-collection").appendChild(card)
    // Add a click event to the like button so that users can increase that toy's likes by one
    card.children[card.children.length - 1].addEventListener("click", increaseToyLikes)
  }

  // When a user submits the create a toy form:
  document.querySelector(".add-toy-form").addEventListener("submit", function(e){
    // Prevent the form's default behaviour so that it doesn't submit a POST request and refresh the page
    e.preventDefault()
    // Create a new toy object with the name and image the user typed in the form
    const newToy = {
      name: e.target.children[1].value,
      image: e.target.children[3].value,
      likes: 0
    }
    // Tell the server to create a new toy with the information from the form
    createToy(newToy)
      // When the server responds with the newly created toy, create a new div for it and add it to the DOM
      .then(function(toy){
        renderToy(toy)
      })
  })

  function createToy(newToy) {
    // Create a configuration object with the appropriate method and headers and the newly created toy as the body
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    return fetch(baseURI, configurationObject)
      .then(function(response){
        return response.json()
      })
  }

  // When a user clicks on a toy's like button:
  function increaseToyLikes(e) {
    // Create the body of the request by accessing the liked toy's current likes and increasing them by one
    const updatedToy = {
      likes: parseInt(e.target.previousElementSibling.innerText) + 1
    }
    // Pass updateToy the body of the request and the id of the toy we want to update so that we can create the correct URL
    updateToy(updatedToy, e.target.id)
      // When the server responds with the updated toy, find the div for that toy and update its likes to be the newly increased like count of the updated toy
      .then(function(toy){
        e.target.previousElementSibling.innerText = toy.likes
      })
  }

  function updateToy(updatedToy, toyId) {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedToy)
    }
    return fetch(`${baseURI}/${toyId}`, configurationObject)
      .then(function(response){
        return response.json()
      })
  }

  renderToys()


})
