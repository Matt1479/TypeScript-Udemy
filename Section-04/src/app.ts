// // const userName = "Mark";
// // let age = 30;

// // age = 29;

// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(2, 5));

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]); // nope!

// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

// rest operator == flexible functions

// const add = (...numbers: number[]) => {
//   let result = 0;
//   return numbers.reduce((currentResult, currentValue) => {
//     return currentResult + currentValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

// the (...numbers: number[]) will merge all incoming parameters / list of values into an array

// reduce() method: performs operation on every element of an array,
// returns a result and then adds this results together.

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// destructure = pull elements of out the array, in this case into separate constants
const [hobby1, hobby2] = hobbies;
// output: Array ["Sports", "Cooking"] "Sports" "Cooking"

let person = {
  fName: "Mark",
  age: 27,
};

const { fName, age } = person;

console.log({ fName, age }, person);
// output: Object { fName: "Mark", age: 27 } Object { fName: "Mark", age: 27 }
