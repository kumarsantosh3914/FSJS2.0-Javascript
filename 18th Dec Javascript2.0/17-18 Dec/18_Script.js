// WelCome to JavaScript Lecture!
// Stage One will Be completed Today!

// Datatypes => number, string, boolean, Null and undefined.
// Array and Object

// OPerators
// Condtions
// If, If else, Switch and Ternary Cond
// Loops => do while, while loop and For Loop
// Math and Date
// Array and method => Assignment to write article
// for of  => Array and for in => Object

// Topic: Function

function sum(value1, value2) {
    // Defination of Function
    // let num1 = 16;
    // let num2 = 25;

    console.log('Addition of Two Number are: ', value1 + value2);
}

sum(16, 25); // Calling of Funcrion
sum(52, 61);
sum(10, 11);
sum(10, 20);
sum(75, 85);
sum(30, 67);
sum(65, 54);
sum(65, 66);

// Normal.function and  Function with parameters

// Function with Return type

function sum(val1, val2) {
    let result = val1 + val2;
    return result;
}

let add = sum(10, 25);
console.log(add);

let add1 = sum(10, 43);
console.log(add1);

// String
function URL(url, domain) {
    let con = 'https://';
    let result = con + url + domain;
    return result;
}

console.log(URL('santosh', '.me'));
// console.log(santosh);
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let sumarray = [1, 2, 3, 4, 5, 6, 7, 9, 8];
let arrresult = sum(sumarray);
console.log(arrresult);

function santosh() {
    // arguments
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(santosh(7, 8, 9, 10, 11, 12, 14, 15));

let santosh = (var1, var2) => {
    console.log('Me Bhagwan hu', var1, var2);
};
santosh(1, 2);

let santosh = () => {
    console.log('santosh');
};

santosh();
Object

let userName = {
    firstname: 'santosh',
    lastname: 'kumar',
    role: 'admin',
    loginCount: 25,
};

console.log(userName.role);

userName.loginCount = 61;

console.log(userName);

// for in

for (const x in userName) {
    console.log(userName[x]);
}
