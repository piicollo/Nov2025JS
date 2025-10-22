const userId = 12453;
let userName = "kapil1997";

console.log ("User Id: " + userId);
console.log("User Nam3e: " + userName);

// Old syntax or form of using stings'

console.log("\n");

// String Interpolation 
console.log(`User Id: ${userId}`);
console.log(`User Name: ${userName}`);
console.log("\n");

console.log(`User Id: ${userId} \n
User Name: ${userName}`);


// Another Way of declaration of strings
let gameName = new String("PUBG");

// Strings Methods

console.log(gameName.__proto__);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("B"));

let userName1 = "PlayerUnknown";

const userOneName = userName1.slice(0, 4);
const userTwoName = userName1.substring(1, 6);

console.log(userOneName);
console.log(userTwoName);


let userThreeName = "  hello123  ";

console.log(userThreeName);

console.log(userThreeName.trim());

const url = "https://kapilchharahang.com/gallery%20four";

console.log(url);
console.log(url.replace('%20', '-'));

const userFourName = "the dog is out of the house";

console.log(userFourName.split('', 5));
