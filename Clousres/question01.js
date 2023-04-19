// what will be logged to console

let count = 0;
(function printCount() {
    if (count === 0) {
        var count = 1; // shadowing 
        console.log(count);
    }
    console.log(count);
})();