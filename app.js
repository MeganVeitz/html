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

// Creating Arrays
let students = []; // empty array

let colors = ['red', 'blue', 'grey', 'black']; //populated array

let days = ['Monday', 'Tuesday', 'Wednesday'];

let stuff = [76, '4', false, null, 9.9999]; // array can have different data types

// Define lottoNumbers Excerise below:
let lottoNumbers = [1, 2, 3, 4, 5, 6];


//Without changing leaderboard change the contents Excerise
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
//Changes below
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

// Push, Pop, Shift, Unshift
let movieLine = ['tom', 'nancy'];
// pass the item to push to the end of the array
movieLine.push('oliver')
// outputs tom, nancy, oliver
movieLine.push('harry', 'meg')
// outputs tom, nancy, oliver, harry, meg

// pop, returns and removes last item from array
movieLine.pop()
// outputs tom, nancy, oliver, harry
let person = movieLine.pop()  // person = 'harry'
// outputs tom, nancy, oliver


// can populate array with push statement 
let barbell = []
barbell.push(45)
barbell.push(45)
barbell.push(25)
barbell.push(10)
barbell.push(2.5)
// Can de-populate array from Last in First out order
barbell.pop()
barbell.pop()

//Shift removes from beggining of array
// was tom, nancy, oliver
let nextPatron = movieLine.shift()
// now it's nancy, oliver

//Unshift puts input at beginning of array 
movieLine.unshift('VIP')
//outputs ['VIP', 'nancy', 'oliver']


// Planet Practice:
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift()
planets.push('Saturn')
planets.unshift('Mercury')
// output is ['Mercury','Venus','Earth', 'Mars', 'Jupiter', 'Saturn']


//Concat used to merge 2+ arrays
const cats = ['blue', 'kitty']
const dogs = ['rusty', 'wyatt']
const catDog = cats.concat(dogs) // cats will be first 
// Outputs is ['blue', 'kitty', 'rusty', 'wyatt']

//Includes() does array include a particular value, will only first first fit 
cats.includes('blue') //true
cats.includes('Blue') //false

//IndexOf() works similarly as a string (if you get -1, it doesn't exist)
cats.indexOf('kitty') //1
cats.indexOf('wyatt') //-1

// Reverse() destructive method aka changes it. reverses OG array
// Before ['blue', 'kitty', 'rusty', 'wyatt']
catDog.reverse()
// Output is ['wyatt', 'rusty', 'kitty', 'blue']

// SLICE(start, end)
//colors = ['red', 'blue', 'grey', 'black'];
colors.slice(1, 2)
// output is ['blue','grey']
colors.slice(-2) // get the last 2 indexes in an array
// output is still ['blue','grey']

// SPLICE(start, ?deletCount, items) removing or replacing elements plus more
const months = ['Jan', 'March', 'April', 'Blah', 'May']
months.splice(3, 1)
//Output is ['Jan', 'March', 'April','May']
months.splice(1, 0, 'Feb') // inserting btwn, 0 means no delete
//Output is ['Jan', 'Feb','March', 'April','May']
months.splice(5, 0, 'June', 'July', 'Aug')
// Output is ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug']

//SORT() converts everything to strings and compairs their code values
let scores = [1, 70, 98, 5, 60, -9, 567, 1200]
scores.sort()
// Output is not what you would think, it sorts them by their index 0 instead of entire num
// [-9, 1, 1200, 5, 567, 60, 70, 98]


//Multi-D arrays
const board = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
];
// trying to find the middle value
// Index 1 = ['O', null, 'X']
// Index 1 of that line = [null]
board[1][1]
// Output is null


//Change null value to "Hugo"
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
//This will do the trick
airplaneSeats[3].splice(1, 1, 'Hugo')


//OBJECTS each pair has proporties , datatypes can be different and no order unlike arrays
// property = key + value (keys are strings)
// kEY --> VALUE PAIRS
// username: ---> 'CrazyCatLady'
// upvotes: ----> 7
// text --------> 'Great post!'

const peoplePerson = {} //empty object
const personPerson = { firstName: 'Mick', lastName: 'Yager' }; //pre-populated 


const kitchenSink = {
    favNum: 987512,
    ifFunny: true,
    colors: ['purple', 'gold']
};


// First object Exercise, create an object called product
const product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
};

//copy
//const peoplePerson = {} 
//const personPerson = { firstName: 'Mick', lastName: 'Yager' }; 

// Accessing data out, [] and string inside
personPerson["firstName"] // output 'Mick'
console.log('Mick1' + personPerson);
// can also be dot notation and no string
personPerson.firstName;  // output 'Mick'
console.log('Mick2' + personPerson);
// also
personPerson['first' + 'Name'] // output 'Mick'
console.log('Mick3' + personPerson);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
console.log(restaurant['address', 'city', 'state', 'zipcode']);
//restaurant.slice(1, 4)

console.log(restaurant.address);
