console.log("Hello from my first script!!");
let num = 3;
console.log(num);

console.log("GOODBYE!")
let rand = Math.random();
if (rand < 0.5) {
    console.log("Your Number is less than 0.5!")
    console.log(rand);
}
console.log("After conditional")

if (rand >= 0.5) {
    console.log("Your Number is greater than or equal to 0.5!")
    console.log(rand);
}

function isEven(num) {
    if (num % 2 === 0) {
        console.log("even");
    }
}
isEven(7);

function getColor(phrase) {
    if (phrase === "stop") {
        console.log("red");
    } else if (phrase === "slow") {
        console.log("yellow");
    } else if (phrase === "go") {
        console.log("green");
    } else {
        console.log("purple");
    }
}

// Change the value of num, so that "YOU GOT ME!" prints out
const number = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (number <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (number < 103) {
        if (number % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

/*Truthy and Fasly inputers
Fasly Values:
    False, 0, ""(empty string), null, undefiend, Nan
Everything else True
*/
const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!");
} else {
    console.log("FASLY");
}

const password = prompt("Enter password");
//doesn't contain a space
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD")
}


// AND &&, OR ||, NOT ! practice 
const age = '90';

if ((age <= 0 && age < 5) || age >= 65) {
    console.log("FREE")
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// NOT !
const firstName = prompt("Enter your first name");
if (!firstName) {
    firstName = prompt("Try Again!");
}

// SWITCH statement, don't forget the break statement 
const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!");
        break;
    default:
        console.log("I don't know that!!!")
}
