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

let c = {
    greetings: "hey!"
};

let d ;
d = c;
c.greetings = 'Hello';

console.log(d.greetings);
