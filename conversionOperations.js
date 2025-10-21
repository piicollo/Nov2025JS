let score = "Hello ";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abe" => Nan
// true => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true and 0 => false
// "" => false
// "name" => true



// ************************************ Operations ************************************//

// let value = -3;
// let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(3%2);

// let num1 = 22;
// let num2 = "12";

// let num3 = Number(num2);
// console.log(num1 + num3);

// console.log(2+3);
// console.log(2 + "3");
// console.log((2*3) * (4/3)); // 7.99999999

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2  ; // not readable code
// console.log(num1, num2, num3);


// prefix and postfix 

let gameCounter = 20;
gameCounter++;
console.log(gameCounter);
