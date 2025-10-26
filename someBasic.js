// let a = {
//     "y": "10",
//     "z": "10"
// };

// console.log(a["z"] + 5);

// let a = "a";
// let b = "v";
// let c = 12;
// let d = 12;
// let e = "5";
// let f = 5;

// console.log(a == b); // false (These two  a and b are strings but not same value)
// console.log(c === d); // true (These two are declared as number and values are equal)
// console.log(a === c); // false (a is string and c is number so, it strictly judged it and not the same value)
// console.log(e == f); // loosly equal that means it converts as same number

// let c = {
//     greetings: "hey!"
// };

// let d ;
// d = c;
// c.greetings = 'Hello';

// console.log(d.greetings);

// function User(name) {
//     this.name = name;

// }

// const u1 = new User('Alice');

// const u2 = User('Bob');

// console.log(u1); // User {name: 'Alice'}
// console.log(u2); // undefined


// let count = 10;
// let step = "5";

// console.log(
//     count + parseInt(step)
// );

// let num1 = "2";
// let num2 = 12;
// const str = "abe123"

// console.log(parseInt(num1)); // 2 as number or integer
// console.log(parseInt(num1) + num2); // 14 converting "2" string into a number 
// console.log(parseInt(str) + num2); // NaN (Not a number)

// let number = 0;
// console.log(number++); // output is 0 but is incremented to 1
// console.log(++number); // 1 + 1 that is 2
// console.log(number); // 2

// let fruits = [
//     "Apple", // 0
//     "Banana", //1
//     "Chhery" // 2
// ]

// console.log(fruits[1]); // calling index numer 1 that is banana


// let a = '9';
// let b = '4';

// console.log(typeof a);
// console.log(typeof b);

// // console.log(a * Number('4'));
// console.log(a + b);

// console.log(a * b);

// let c = 2;
// let d = 5;

// console.log(c * d);

// const numbers = [10, 20, 30, 40];
// const firstTwo = numbers.splice(0, 2);

// console.log(firstTwo); // fisrtTwo will be [10, 20]

// const person = {
//     name: 'Alice',
//     age: 30
// };

// const { name, ...rest } = person; // object destructuring assignment that extract valeu of name that is 'Alice'

// console.log(rest); // age


// console.log(null == undefined);
// console.log(null === undefined);
// console.log("\n");

// console.log(typeof null);
// console.log(typeof undefined);

// let x = '9';
// let y = '5';

// console.log(x - y); // 4

// let list = [1, 2, 3];

// if (list.length > 0) {
//     console.log("True");
// }
// else {
//     console.log("False");
    
// }
// // output : True

// let x = 10;
// let y = x++; // 10

// console.log(y);

console.log(typeof null); // object
