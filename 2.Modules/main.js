// const { add: addNumber, subtract, addAndMultiply } = require("./functions");
import { add, subtract, addAndMultiply } from "./functions";


const output = add(4, 5);

// function add(){
//     console.log("Hello, world!");
// }

// add();  // This will print "Hello, world!"

const output2 = addAndMultiply(5, 6, 7);

const output3 = subtract(9, 6);

console.log(output); 
console.log(output2);
console.log(output3);