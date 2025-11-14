// Function in Java Script
// console.log('K');
// console.log('A');
// console.log('P');
// console.log('I');
// console.log('L');
// Full function defination
// funtion keyword , name and syntax

// function myName(){
//     console.log('K');
//     console.log('A');
//     console.log('P');
//     console.log('I');
//     console.log('L');
// }

// myName() // execution

// Add two numbers using function

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(2, 3)
// // console.log(addTwoNumbers);
// console.log(typeof addTwoNumbers);

// 1) Normal function

// function greet(name) {
//     return `Hello ${name}`;
// }

// console.log(greet("Kapil"));

// 2) Function with Default parameters 

// function greetings(name = "Kapil") {
//     return `Hello ${name}`;
// }
// console.log(greetings("Hem Raj"));

// 3) Function Declaration (Named Function)

// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 4) // calling function

// console.log(`Total : ${result}`); // 9

// 4) Function Expression that creates anonymous (unnamed function) 

// const product = function(c, d) {
//     return c * d;
// }

// let total = product(2, 3);

// console.log(`Product: ${total}`);

// 5) Arrow Function 

// const subtraction = (e, f) => e - f; // function declaration
// console.log(`Result: ${subtraction(2, 4)}`); // function body or implementation

// 6) Function Retruning Nothing (Void Function)

// function sayHi() {
//     console.log(`Hi there!`);
    
// }

// sayHi(); // Hi there!

// function greetme(name) {
//     return `Hello there! ${name}`;
    
// }
// let result =  greetme("Hem");
// console.log(result);

// Anonymous Function (No Name)

// setTimeout(function() {
//     console.log(`This runs after 2 seconds`);
    
// }, 2000);

// setTimeout(() => console.log(`Arrow function callback`), 2000);

// function hi(name) {
//     return name;
// }

// console.log(hi('Kapil'));

// function hello() {
//     console.log("Hello"); // Prints only on console
    
// }
// hello()

function district() {
    return `Bhojpur`; // returning value
}

let purba = district(); // storing data to variables 

console.log(`Eastern District: ${purba}`); // printing to console
