// Dates 

// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString() + "\n"); // 
// console.log(myDate.toDateString() + "\n"); // Thu Oct 23 2025
// console.log(myDate.toLocaleDateString() + "\n"); //10/23/2025

// console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 9, 23, 17, 28)
// let myCreatedDate = new Date("2025-10-23")
// let myCreatedDate = new Date("10-23-2025")
// // console.log(myCreatedDate);
// // console.log(myCreatedDate.toDateString());
// // console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// // console.log(myTimeStamp); // milisecond
// // console.log(myCreatedDate.getTime());

// console.log(Date.now()/ 1000);
// console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
        weekday: "long"
    })); // Thursday
