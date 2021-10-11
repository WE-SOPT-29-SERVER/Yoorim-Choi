const sum = require("./sum");

const result = sum(1,3);
console.log("sum result: ",result)

const calculator = require("./calculator");

console.log("add result: ",calculator.add(1,3));
console.log("subtract result: ",calculator.subtract(1,3));
console.log("multiply result: ",calculator.multiply(1,3));
console.log("divide result: ",calculator.divide(1,3));