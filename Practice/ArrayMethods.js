// Array Methods
// A way to Declare a Array 
let names = new Array('Name 1', 'Name 2'); 
// console.log(names);

// Push => Insert New Values inside the Array
names.push('VYOM');
// console.log(names);

// Slice
let namess = ['Hitesh Sir', 'Santosh', "Surya", 'Bipul', 'Anurag'];
// console.log(namess.slice(1, 6));

// Splice
let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);

// concatenation

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
let arr3 = [6, 7, 6, 7, 7];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));


// fill 
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// fill with santosh from position 3 until position 4
arr4.fill('santosh', 2, 4);
// console.log(arr4);

// include 
let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7, 7));
// console.log(num.includes(7, 7));

// indexof

let num1 = [1, 2, 3, 'santosh', 4, 5, 6, 7, 8, 'Anurag'];
// console.log(num1.indexOf('santosh'));

// isArray
let num2 = [1, 2, 3, 'santosh', 4, 5, 6, 7, 8, 'Anurag'];
let num3 = 'santosh';
console.log(Array.isArray(num2));
console.log(Array.isArray(num3));