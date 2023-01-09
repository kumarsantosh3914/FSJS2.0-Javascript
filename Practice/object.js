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
