function todo(task) {
    console.log("Start of todo");
    setTimeout(function fun() {
        console.log("Completed", task);
    }, 5000);
    console.log("End of todo");
}

console.log("Starting");
todo("assignmets");
console.log("Ending");