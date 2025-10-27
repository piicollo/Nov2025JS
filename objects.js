// Singleton Objects
//Object.create

// Object Literals
// const mySym = Symbol("key1");

// const studentInfo = {
//     // "name": "Heema",
//     "std name": "Kapil Rai", // key "stdName" and value "Kapil Rai"
//     [mySym]: "mykey1",
//     eMail: "kapil@mail.com",
//     age: 24,
//     isLoggedIn: false,
//     location: "Kapan, Kathmandu"
// }

// // console.log(studentInfo["std name"]);
// // console.log(studentInfo['age']);
// // console.log(typeof studentInfo['age']);
// // console.log(typeof studentInfo["std name"]);
// console.log(studentInfo[mySym]); // not a string
// console.log(typeof mySym); // sylmbol


// // Change in value of an Objects

// studentInfo.eMail = "kapilrai@mail.com";
// console.log(studentInfo.eMail);

// console.log("\n");

// console.log(studentInfo); 
// Object.freeze(studentInfo); // freezing the values in Object that cannot be changes

// studentInfo.age = 25; // it cannot be changed
// console.log(studentInfo.age); // value can't be changed

// Adding function in the Object

// const userOne = {
//     name: 'Kapil',
//     email: 'kapil@gmail.com',
//     phone: 9842304490
// }

// userOne.greeting = function(){
//     console.log('Hello userOne');   
// }
// console.log(userOne.greeting);

// console.log("\n");
// console.log(userOne.greeting());

// To reference some values and keys from object using function

const userTwo = {
    name: 'Hema',
    email: 'hema1@MediaList.com',
    phone: 987222
}
// console.log(userTwo);
// console.log("\n");
// console.log(typeof userTwo);

userTwo.greet = function(){
    console.log(`Hello User Two, ${this.name}`);
}

console.log(userTwo.greet());
// Note: use dot notation while taking value from objects