// const studentId = [1234, 1456, 1447, 1455, 1488];
// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const num = new Array(1, 2, 3, 4, 5);

// const newFruits = new Array("Cherry", "Lychees", "Lemons", "Jackfruit");

// console.log(studentId[2]);

// console.log(studentId);
// console.log(typeof studentId);

// console.log(fruits);

// console.log(num);
// console.log(newFruits);

// Array Methods

// newFruits.push("Banana")
// newFruits.push("Mango") // add as a last value in array
// console.log("Array after adding values using push method: ");

// console.log(newFruits);

// console.log("\n");
// console.log(`Array after using pop array method: `);

// newFruits.pop() // remove last  value of array
// console.log(newFruits);

// const myNum = new Array(1, 2, 3, 4, 5, 6);

// // myNum.unshift(8) // add values at first in array

// // console.log(myNum);

// // myNum.shift() // remove first value that are added to in the array
// // console.log(myNum.includes(9));

// // console.log(myNum.indexOf(4));

// // console.log(myNum);

// const newNum = myNum.join() // converted into string from array

// console.log(myNum);

// console.log(newNum);

// console.log(typeof newNum);


// slice & splice method in Array

// const myArr = new Array(0, 1, 2, 3, 4, 5)

// console.log("A: ", myArr);

// console.log("Slice: ", myArr.slice(1, 3)); // show copy form

// console.log("Splice: ", myArr.splice(1, 3)); // Changes array values or replace it

// console.log("B: ", myArr);


// const myStr = ["Hi", "Hello", "My", "Mine", "Our"];

// const myBoolen = ["True", "Fasle", "Null"];

// const myNums = [1, 2, 3, 4, 5,];

// myStr.push(myNums) // sixth element of an array

// myNums.push(myBoolen); // sixth element of an array
// // console.log(myStr);
// console.log(myStr[5]); // myNums and myBoolen in sixth element of an array

// console.log(myStr.concat(myBoolen));

// const myAll = myStr.concat(myNums)
// console.log(myAll);

// Spread Operator

// const myAllArr = [...myStr, ...myBoolen, ...myNums]
// console.log(myAllArr);

// const studentName = ["Kapil", "Ram", ["Shyam", "Hari", "Geeta"], "Seeta",["Shyamu", "Harka",["Balen", "Alen"]]];

// const newStudentArray = studentName.flat(Infinity);

// // console.log(studentName);
// // console.log("\n");
// console.log(newStudentArray);

console.log(Array.isArray("Kamala"));
console.log(Array.from("Kamala"));
console.log(Array.from({name: "Kamala"})); // empty array ++ Interesting Array ++

let stdOne = "Hema";
let stdTwo = "Geeta";
let stdThree = "Seema";
let stdFour = "Hem";

console.log(Array.of(stdOne, stdTwo, stdThree, stdFour));

// Array.of || Array.isArray || Array.from