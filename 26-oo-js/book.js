class Book {
  constructor(title, image) {
    this.title = title
    this.image = image
    this.element = document.createElement("div")
  }

  // Create child elements within the element property that contain the title and image properties of this instance
  render() {
    this.element.innerHTML =
    `
    <h2>${this.title}</h2>
    <img src="${this.image}">
    `
    this.element.classList.add("card")
    return this.element
  }
}
