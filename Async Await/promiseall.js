/**
 * Task:
 * 1. Write a function to download data from a url
 * 2. Write a function to save that downloaded data in a file and return the filename
 * 3. Write a function to upload the file written in previous step to a newurl
 */

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started donwloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dyummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");
            reject(filename);
        }, 3000);
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
        }, 5000);
    });
}

async function processing() {


    return uploadResponse1 + uploadResponse2 + uploadResponse3;
}


async function process1() {
    let donwloadData = await fetchData("www.google.com");
    let file = await writeFile(donwloadData);
    let uploadResponse1 = await uploadData(file, "www.drive.google.com");
    return uploadResponse1;
}

async function process2() {
    let donwloadData1 = await fetchData("www.google.com");
    let file1 = await writeFile(donwloadData1);
    let uploadResponse2 = await uploadData(file1, "www.drive.google.com");
    return uploadResponse2;
}

async function process3() {
    let donwloadData2 = await fetchData("www.google.com");
    let file2 = await writeFile(donwloadData2);
    let uploadResponse3 = await uploadData(file2, "www.drive.google.com");
    return uploadResponse3;
}

console.log("Start");
Promise.all([process1(), process2(), process3()]).then(function process(value) {
    console.log(value);
})

// let x = process1();
// let y = process2();
// let z = process3();
// x.then((v) => {
//     console.log(v);
// })
// y.then((v) => {
//     console.log(v);
// })
// z.then((v) => {
//     console.log(v);
// })
