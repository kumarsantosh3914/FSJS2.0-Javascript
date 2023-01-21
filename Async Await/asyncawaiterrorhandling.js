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
    try {
        let donwloadData = await fetchData("www.google.com");
        let file = await writeFile(donwloadData);
        let uploadResponse = await uploadData(file, "www.drive.google.com");
        return uploadResponse;
    } catch (err) {
        console.log(err);
    }
}

console.log("Start");
processing();
console.log("End");