console.log("Start of the file");
setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);

for(let i = 0; i < 100000000; i++) {
    // something
}

let x = Promise.resolve("Santosh's promise");
x.then(function processPromise(value) {
    console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");