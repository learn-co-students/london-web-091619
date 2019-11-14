// Define a new class
class Square {
  // Constructor method - takes arguments and sets the value of the instance's properties correspondingly
  constructor(sideLength) {
    // The this keyword changes depending on the context - typically, it either refers to the object it is currently being called upon or the object that has received an event e.g. if you had a click event listener that you passed a function which used this, this would refer to the element that was clicked. In this case, this will refer to the instance of Square we are currently constructing
    this.sideLength = sideLength
    // Set the element property of instances of square to be a div
    this.element = document.createElement('div')
    // Addd a click event listener to the div to console.log out the sideLength of the square when we click on it. By using an arrow function, it will keep its context no matter where it's called, so this will always refer to the instance of square we're creating here
    this.element.addEventListener('click', () => {
     console.log(this.sideLength)
   })
  }

  // Instance method
  area() {
    return this.sideLength * this.sideLength
  }

  // Static method - a method attached to the class itself
  static largestOf(squares) {
    let largest = squares[0]
    for (let square of squares) {
      if(square.sideLength > largest.sideLength) {
        largest = square
      }
    }
    return largest
  }

  // Set the style attributes of the div based on the sideLength of the instance of square and return it
  render() {
    this.element.style.height = `${this.sideLength}px`
    this.element.style.width = `${this.sideLength}px`
    this.element.style.borderStyle = 'solid'
    return this.element
  }
}
