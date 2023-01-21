function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting downloading from", url);
        setTimeout(function processDownload() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}

async function processing() {
    console.log("Entering processing");
    let value1 = await fetchData("www.youtube.com");
    console.log("Youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("Google downloading done");
    console.log("Exiting processing");
    return value1 + value2;
}

console.log("Start");
setTimeout(function timer1() {
    console.log("timer 1");
}, 0);
console.log("After setting timer 1");
let x = processing();
console.log("Out");
x.then(function (value) {
    console.log("Finally processing resolves with ", value);
});

setTimeout(function timer2() {
    console.log("timer 2");
}, 1000);

setTimeout(function timer3() {
    console.log("timer 3");
}, 0);
console.log("End");