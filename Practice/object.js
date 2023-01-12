// Topic: Funtion

function sum(Value1 , Value2) {
    // Defination of Function
    let num1 = 16;
    let num2 = 25;
    console.log('Addition of Two Number are: ',  num1 + num2);
    console.log('Addition of Two Number are: ',  Value1 + Value2);
}

// sum(); //calling of function
// sum(16, 25); //calling of function


// Normal function and function with parameters

// Function with Return type
function sum1(val1, val2) {
    let result = val1 + val2;
    return result;
}

let ans = sum1(10, 25);
// console.log(ans);

// calculator 
function cal(val1 , val2) {
    let addition = val1 + val2;
    console.log('Addtion of two number: ', addition);
    let subtraction = val1 - val2;
    console.log('Subtraction of two number: ', subtraction);
    let multipy = val1 * val2;
    console.log('Multiplication of two number: ', multipy);
    let division = val1 / val2;
    console.log('Division of two number: ', division);
    let modulo = val1 % val2;
    console.log('Modulo of two number: ', modulo);
}

// cal(45, 10);

// String 
function URL(url, domain) {
    let con = 'https://';
    let result = con + url + domain;
    return result;
}

let santoshsite = URL('santosh', '.me');
// console.log(santoshsite);

function sum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let sumarray = [1, 2, 3, 4, 5, 6, 7];
let arrreuslt = sum(sumarray);
console.log(arrreuslt);


// arrow function
let Santosh = () => {
    console.log('Me Bhagwan hu');
}

// Santosh();

// Object
let userName = {
    firstName: 'Santosh',
    lastName: 'Kumar',
    role: 'admin',
    loginCount: 25,
};
// console.log(userName);
// console.log(userName.role);
// userName.loginCount = 61;

//for in loop
for(let x in userName) {
    console.log(userName[x]);
}

const Object = {
    rocket: '🚀',
    home: '🏡'
}

const obj1 = {
    rocket: '🚀',
    fuel: 2,
    config: {
        name: 'mars'
    }
}

obj1.fuel = 200;
obj1['year'] = 2000;

// part2
// const obj2 = new Object() //constructor
// obj2.redbook = '📕'
// obj2.bluebook = '📘'
// obj2.myValue = '1 blue book'

// console.log(obj2);

// part 3
// const power = {
//     fly: true,
//     cordinate: Math.random() + 2
// }

// const obj3 = Object.create(power);
// console.log(obj3);
// console.log(obj3.cordinate);

// part 5
const obj5 = {
    comics : 'marvel',
    pen : '',
    printComic: function() {
        this.pen += '📝';
        console.log(this);
    },

    // printComic: () => {
    //     this.pen += '📝'; //this is not work 
    //     console.log(this);
    // },
}

console.log(obj5.printComic().printComic().printComic());