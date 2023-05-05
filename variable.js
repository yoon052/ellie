// 1. Use strict
// added in
// use this in Vanila Javascript
"use strict";

// 2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie"; //name 을 let으로 선언함과 동시에 "ellie" 라는 값을 할당함
  console.log(name);
  name = "hello"; // 재할당하여 name에 "hello" 라는 값이 할당됨
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant
// facor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined
// object, box container
// function, first-class function
