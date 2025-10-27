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

// const userTwo = {
//     name: 'Hema',
//     email: 'hema1@MediaList.com',
//     phone: 987222
// }
// // console.log(userTwo);
// // console.log("\n");
// // console.log(typeof userTwo);

// userTwo.greet = function(){
//     console.log(`Hello User Two, ${this.name}`);
// }

// console.log(userTwo.greet());
// Note: use dot notation while taking value from objects

// Object in Javascript Part 2

// const chatUser = new Object();
// const chatUser = {}
// chatUser.id = "123abc"
// chatUser.name = "Hema"
// chatUser.isLoggedIn = false

// console.log(chatUser);

// const regularUser = {
//     email: "abe@mail.com",
//     fullName: {
//         userFullName: {
//             firstName: "Hem",
//             lastName: "Khatri"
//         }
//     }
// }

// console.log(regularUser.fullName);
// console.log("\n");
// console.log(regularUser.fullName.userFullName.firstName); // Hem
// console.log(regularUser.fullName.userFullName); // { firstName: 'Hem', lastName: 'Khatri' }

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "c",
    6: "d"
}
// const obj4 = {obj1, obj2}
// console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign(obj1, obj2, obj3) // obj1 is target and obj2 & obj3 is source

// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' } all value is assign in obj1 

// const obj5 = Object.assign({}, obj1, obj2, obj3) // first is target and second is source
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' } all value is in same objects

// const obj6 = {...obj1, ...obj2, ...obj3} // spread syntax (most used)
// console.log(obj6);

// fetching values from database 

// const users = [
//     {
//         id: "123abc",
//         email: "abc@gmail.com"
//     },
//     {
//         id: "123def",
//         email: "def@gmail.com"
//     },
//     {
//         id: "123ghi",
//         email: "ghi@gmail.com"
//     }
// ]
// console.log(users[2].email)

const userTwo = {
    username: "hema22",
    email: "hema22@mail.com",
    phone: 984566666,
    isLoggedIn: true
}

// console.log(userTwo);
// console.log("\n");
// console.log(Object.keys(userTwo)); // [ 'username', 'email', 'phone', 'isLoggedIn' ] datatype is in array
// console.log("\n");
// console.log(Object.values(userTwo)); // [ 'hema22', 'hema22@mail.com', 984566666, false ] Array
// console.log("\n");
// console.log(Object.entries(userTwo)); // Output: arrays inside array
console.log(userTwo.hasOwnProperty('isLoggedIn'));
console.log(userTwo.hasOwnProperty('isLogged'));


