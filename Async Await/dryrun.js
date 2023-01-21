const { colors } = require("@material-ui/core");

function donwloadData(caller) {
    return new Promise(function (resolve, reject) {
        setTimeout(function timer2() {
            let result = "Success timer2";
            resolve(result);
        }, 0);
    });
}

function uploadData(caller) {
    return new Promise(function (resolve, reject) {
        setTimeout(function timer1() {
            let result = "Success timer1";
            resolve(result);
        }, 0);
    });
}

async function process1() {
    val1 = await donwloadData("process1");
    console.log("val1 in process 1");
    val2 = await uploadData("process1");
    console.log("val2 in process1");
    return " process1 async completed";
}

async function process2() {
    val1 = await donwloadData("process2");
    console.log("val2 in process 2");
    val2 = await uploadData("process2");
    console.log("val2 in process2");
    return " process12 async completed";
}

console.log("Start main");
x = process1()
x.then(function work1(value) {
    console.log("from process1 callback ", value);
});
console.log("middle");
y = process2()
y.then(function work2(value) {
    console.log("from process2 callback ", value);
})

console.log("End main");