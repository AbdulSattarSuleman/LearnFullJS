

// {
//     // This is block Scope
//     var scopVariable = 50;
//     {
//         // This is Nested Scope Variable
//         var nestedScopeVariable = "100"; 
//     } 
    
// }

// if(true){
//     var letter = "A";
// }

// console.log(scopVariable + ' ' + nestedScopeVariable + ' ' + letter);
// // console.log(nestedScopeVariable);
// // console.log(letter);

// {
//     let name = "Abdul Sattar"; // scope block level
//     const age = 21; // Scope block level
//     var gender = "male"; // Access in and out of block 
//     console.log(name + " " + age + " "+ gender);
// }
// console.log(gender);
// // console.log(name + " " + age + " "+ gender);


// // const fs = require("fs");

// // const square = function(a){
// //     return a*a;
// // }

// // console.log("----------------------------------------------");
// // const a = 2;
// // const square = a => a*a;
// // console.log(square);

// console.log("----------------------------------------------");

// let util = {
//     square(a){
//         return a*a;
//     }
// }
// console.log(util.square(3));

// console.log("-------------------------------------------------");

// const PI = 3.1412;
// const sum = (a, b) => a + b;
// const square = a => a*a;

// // Two ways for creating object

// // 1 way

// const X = {
//     PI: PI,
//     sum: sum,
//     square: square,
// }

// // 2 way
// // const X= {};
// // const { PI, sum , square} = X

// console.log(PI + "\n" + sum(12,12) + "\n" + square(9));

// console.log("-------------------------------------------------");

// console.log(X.PI + "\n" + X.sum(1,8) + "\n" + X.square(9));


// const component = require("react").component;
// const {component} = require("react");


// const toDecimal = ({ base, number}) => {
//     return parseInt(number, base);
// }

// console.log(
//     toDecimal({base: 5, number: 10})
// );

console.log("-------------------------------");
const toDecimal = (base, ...numbers) => {
    console.log(numbers); //[1, 2, 3]
    console.log([0, ...numbers]);

    return numbers.map( number => parseInt(number, base));
};

console.log(
    toDecimal(2,101, 111, 1010)
);