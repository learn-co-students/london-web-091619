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
          // Iterate through all of the toys and for each one create a div with a class of card, which contains:
          for (let i = 0; i < toys.length; i++) {
            renderToy(toys[i])
          }
      })
  }

  function renderToy(toy) {
    // Create a div with a class of card
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar">
    <p>${toy.likes}</p>
    <button class="like-btn" id="${toy.id}">Like <3</button>
    `
    document.querySelector("#toy-collection").appendChild(card)
    card.children[card.children.length - 1].addEventListener("click", increaseToyLikes)
    // A h2 containing the toy's name
    // An img with an src of the toy's image and a class of toy-avatar
    // A p containing that toy's number of likes
    // A button containing the text Like <3 with the class of like-btn
  }

  // When a user submits the create a toy form:
  document.querySelector(".add-toy-form").addEventListener("submit", function(e){
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
    // Tell the server to update that toy by increasing its like count by one
    const updatedToy = {
      likes: parseInt(e.target.previousElementSibling.innerText) + 1
    }
    updateToy(updatedToy, e.target.id)
      // When the server responds with the updated toy, find the div for that toy and update its like count
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
