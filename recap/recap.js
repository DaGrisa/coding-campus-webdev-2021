// -----
// Variables
// -----

// data types
const string = "ich bin ein Text";
const templateString = `ich beherrsche sogar Zeilenumbrüche
und Ersetzungen: ${string}, sogar mitten im Text`;
const integer = 4; // both are number
const decimal = 1.23; // both are number
const boolean = true;
const nullType = null;
const emptyVariable = undefined;

// scopes
{
  // this defines a new scope
  var global = "exists globally";
  const localImmutable = "constant value (not changeable)";
  //localImmutable = "ohno"; // type error - assignment to constant variable
  let localMutable = "changeable value";
  localMutable = "this works";
}
console.log(global);
//console.log(localImmutable); // reference error - not defined
//console.log(localMutable); // reference error - not defined

// -----
// Container
// -----

// arrays
const array = ["item one", "item two", "item three"];
array.push("item four"); // add an item
const itemAtIndex = array[2];
const lastItem = array.pop();
const firstElement = array.shift();

// objects
const object = {
  property: "value",
  anotherProperty: 42,
};

// maps
const map = new Map();
map.set("key", "value");
map.set("name", "test");
console.log(map.get("name"));
map.set("name", "overwrite");
console.log(map.get("name"));

// -----
// Control Structures
// -----

// conditional flow
if (true) {
  console.log("here we go");
} else if (true) {
  console.log("oh no");
} else {
  console.log("oh no");
}

const value = Math.floor(Math.random() * 5);
switch (value) {
  case 0:
    console.log("value is zero");
    break;
  case 1:
  case 2:
    console.log(`value is 1 or 2`);
    break;
  default:
    console.log(`value is ${value}`);
}

// loops
let condition = true;
while (condition) {
  // kopfgesteuert
  console.log("do smth repeatingly");
  condition = false;
}

do {
  console.log("do smth repeatingly");
} while (condition); // fussgesteuert

for (let index = 0; index < 5; index++) {
  console.log(`do smth: ${index}`);
}

for (const key in array) {
  console.log(`for in: ${key}`);
}

for (const iterator of array) {
  console.log(`for of: ${iterator}`);
}

// conditional flow in loops

// continue; break;

// -----
// Program Structure
// -----

// functions

function functionName(parameterOne, parameterTwo) {
  // signature
  console.log(`function parameters: ${parameterOne}, ${parameterTwo}`); // body
} // every function has its own scope

// classes / objects

class Example {
  constructor(value) {
    this.value = value;
  }
  getValue = () => this.value;

  static answerToAll = 42;
  static add = (x, y) => x + y;
}

// modules

import { helloWorld } from "./hello.js";
helloWorld();

// -----
// Utils
// -----

Number.parseInt("42");
Number.MAX_VALUE;
Math.random();
Math.PI;
JSON.parse('{"hey": "ho"}');
Date.now();

// -----
// Asynchronous
// -----

/*
1. Computer Architektur => CPU / Arbeitsspeicher / Datenspeicher / Bus / Peripherie
2. JS => Single Threaded (Non-Blocking) mit 1 Call Stack => Event Loop
(3. Multi-Threaded => (Web-)Workers)

https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
https://t3n.de/news/event-loop-funktioniert-553074/
*/

// -----
// ES6 Features
// -----

// let und const
// Arrow Functions () => console.log('function call')
// Multi-line Strings ``
// Default Parameter function hey(ho = 42) {...}
// Template Literals
// Desctructuring Assignment array (const [x, y] = array) and object (const {x, y} = object)
// Promises und async / await
// Classes
// Modules
