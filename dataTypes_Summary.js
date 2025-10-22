// let num1 = 22;
// num2 = String(num1);

// console.log(num2);
// console.log(typeof num2);

// Types of data types or Data Categorized
// 1. Primitive Data Types (& Types):
// String, Numbers, Boolean, null, undefined, Symbol, bigInt :
// const score = 12;
// let scoreValue = 100.2;
// const loggedIn = true;
// let outSideTemp = null;
// let userEmail; // undefined
// // let userEmail = undefined;
// const id = Symbol("12345");
// const anotherId = Symbol(1233);
// console.log(typeof anotherId);
// console.log(typeof(id));

// console.log(id);
// console.log(anotherId);

// const largeNumber = 1245n;
// console.log(typeof largeNumber);



//2. Non-Primitive Data Types (Reference )

// Array, Objects, Functions 

// Arrays 

// const userId = [1234, 1245, 12455];

// console.log(userId);
// console.log(typeof userId);


// Objects 
// let studentsName = {
//     name: "Kapil Rai",
//     faculty: "BCS",
//     email: "BCS2440"
// }

// console.log(studentsName);

// // Functions In Java Script

// const myFunction = function() {
//     console.log("Hello World! ");
    
// }

// myFunction()
// console.log("\n");


// console.log(typeof myFunction);

// Stack(Primitive), Heap(Non-Primitive)

let userNames = "helloMadam";

let studentName = userNames ;

studentName = "studentName11";

console.log(userNames);
console.log(studentName);
// In Stack memory data is copied to another value

let nameOfusers = {
    name : "Hitesh",
    userId: 1245,
    mail: "hitesh@MediaList.com"
}

console.log(nameOfusers);

let nameOfuser = nameOfusers;

nameOfusers.mail = "xyz@mail.com";

console.log(nameOfusers.mail);
console.log(nameOfuser.mail);
// In heap memory value always changed but can't get copy
