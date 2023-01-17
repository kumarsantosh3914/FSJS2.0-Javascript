function a(name) {
    return function b() {
        console.log(name);
    }
}

let x = a("Santosh");
for(let i = 0; i < 100000000; i++) {
    // something
}
console.log(x);
x();