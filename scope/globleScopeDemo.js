let name = "Santosh";
function greet() {
    console.log("Greeting !", name);
    var x = 10;
    function test() {
        console.log("test", x);
    }
    test();
    console.log(x);
}

function fun() {
    console.log("have fun! ", name);
}
greet();
console.log(x);
fun();