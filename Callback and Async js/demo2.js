function todo(task) {
    console.log("Starting todo");
    setTimeout(function fun() {
        console.log("completed", task);
    }, 5000);
    task = "santosh";
    console.log("End of todo");
}

console.log("Starting");
todo("assignment");
console.log("Ending");

