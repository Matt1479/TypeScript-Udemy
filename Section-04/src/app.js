// // const userName = "Mark";
// // let age = 30;
// // age = 29;
// const add = (a: number, b: number) => {
//   return a + b;
// };
// console.log(add(2, 5));
var hobbies = ["Sports", "Cooking"];
// console.log(hobbies[0]);
var activeHobbies = ["Hiking"];
// activeHobbies.push(hobbies[0], hobbies[1]); // nope!
activeHobbies.push.apply(activeHobbies, hobbies);
