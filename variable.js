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
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
console.log(
  `value : ${symbol1.description}, type : ${typeof symbol1.descriptionN}`
);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value : ${text}. type : ${typeof text}`);
text = 1;
console.log(`value : ${text}. type : ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}. type : ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}. type : ${typeof text}`);
