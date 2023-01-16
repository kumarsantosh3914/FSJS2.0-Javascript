{
    var x = 10; // becomes global due to var
    console.log(x);
}

console.log(x);

// Local scope
function fun() {
    var x = 10;
    console.log(x);
}
console.log(x);

function fun() {
    console.log(x); // why we get undefind ? -> Due to lexical scoping
    var x = 10;
    console.log(x);
}

fun();

// another case
if(true) {
    var z = 30;
}
else {
    var a = 20;
}

console.log(z);
console.log(a);

