// console.log(document);
// console.log(window.document);
// console.log(document.documentElement);

// console.log(document.head);
// console.log(document.body);
// console.log(document.body.firstElementChild);
// let value = document.getElementById("fsjs2");
// console.log(value.innerText);
// console.log(value.innerHTML);

let value = document.getElementsByClassName("tech");
console.log(value);
console.log(value[0].innerText);
console.log(value[1].innerText);
value[1].innerHTML = "Santosh";
// value[2].innerText = "<h1>Hello Santosh</h1>";

// by tag name
let val = document.getElementsByTagName("h1");
val[0].innerText = "Hello santosh! How are you";
// val[1].innerHTML = "<h1>Hello santosh! How are you</h1>";
console.log(val);

let h1 = document.querySelector("#fsjs2").innerText;
console.log(h1);




