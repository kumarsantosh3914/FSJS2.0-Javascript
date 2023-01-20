function demo1() {
    return new Promise(function (resolve, reject) {
        console.log("Hi");
        setTimeout(function process() {
            console.log("wohoo, task done");
            resolve("Students are the best");
        }, 10000);
        console.log("By");
    });
}


function demo2(val) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed timer");
            if(val % 2 == 0) {
                resolve("Even");
            }
            else {
                reject("Odd");
            }
        }, 10000);
        console.log("Somewhere");
    });
}

let x = demo2(4);
console.log(x);