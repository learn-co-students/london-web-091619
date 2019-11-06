const person = {
  name: "gabe",
  height: "for me, quite tall",
  age: 24,
  sass: "moderate"
};

// destructuring

function showDetails({ name, age, sass }) {
  console.log(`${name}, ${age}, sass: ${sass}`);
}

// showDetails(mani);

const getMeetingTimes = () => {
  return ["09:00", "11:00"];
};

// const [start, end] = getMeetingTimes();

// console.log(start, end);

// key value assignment shortcut

// const meetingAsObject = {
//   start,
//   end
// };

// console.log(meetingAsObject);

// dynamic object keys

const keys = ["name", "age", "sass"];
const values = ["mani", 29, "high"];

const obj = {};

keys.forEach((key, index) => {
  obj[key] = values[index];
});

// console.log(obj);

const obj2 = {
  name: "sam",
  shirt: "grey"
};

const anotherKey = "height";

const extendedObj = {
  ...obj,
  ...obj2,
  [anotherKey]: "medium"
};

// console.log(extendObj);

// ES6 Spread Operator

const numbers = [0, 1, 2, 3];
const moreNumbers = [...numbers, 10, 11, 12];

// console.log(moreNumbers);

// const push = (array, el) => [...array, el];

// const moreNumbersAgain = [...moreNumbers, 99];

// const pushedMoreNagain = push(moreNumbersAgain, 10);

// console.log(pushedMoreNagain);

// arrow functions

// const fn = arg => console.log(arg)
// const fn = arg => {
//   console.log(arg)
// }
// const fn = arg => {
//   return console.log(arg)
// }

// classes

// class Person {
//   constructor(name, age, sass) {
//     this.name = name;
//     this.age = age;
//     this.sass = sass;
//   }

//   showDetails = () => {
//     console.log(`${this.name}, ${this.age}, sass: ${this.sass}`);
//   };
// }

// const person = new Person("mani", 230, "low");

// console.log(person);
// person.showDetails();

// callbacks

// const calculate = (number, calculation) => calculation(number);

// const multiplierFunction = multiplier => number => multiplier * number;
// const multiplyBy10 = multipliesrFunction(10);

// console.log(calculate(2, multiplyBy10));

// iterators

// const arr = [];

// const moreNumbersAgain = [1, 2, 3, 5, 26];

// moreNumbersAgain.forEach(number => arr.push(number));
// moreNumbersAgain.map(number => multiplyBy10(number));
// moreNumbersAgain.map(multiplyBy10);

// const thingToRemove = 1;

// moreNumbersAgain.filter(n => n !== thingToRemove);
