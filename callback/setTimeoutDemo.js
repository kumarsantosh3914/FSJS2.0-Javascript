function todo(task) {
    setTimeout(function fun() {
        console.log("Completed", task);
    }, 2000);
}

console.log("Starting");
todo("assignments");
console.log("Ending");

// another one
function fun(task1, task2) {
    task1 = "paras";
    setTimeout(function gun() {
        console.log("completed", task1);
    }, 2000);
    task1 = task2;
    task2 = "assign";
}

fun("12", "34");

// another one
function test() {
    for(var i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : $[i]`);
        }, i * 1000);
    }
}

function test() {
    for(let i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : $[i]`);
        }, i * 1000);
    }
}

