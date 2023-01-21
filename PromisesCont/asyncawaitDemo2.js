/**
 * Tasks:
 * 1. Write a function to download from a url
 * 2. Write a function to save that downloaded data in a file and return the filename        
 * 3. Write a function to upload the file written in previous step to a new url
 */

const { colors } = require("@material-ui/core");

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting  donwloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
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
            resolve(filename);
        }, 3000);
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is");
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploding done");
            resolve(result);
        }, 5000);
    });
}

async function processing() {
    let donwloadData = await fetchData("www.google.com");
    console.log("Downloading await completed", donwloadData);
    let file = await writeFile(donwloadData);
    console.log("writing await completed", file);
    let uploadResponse = await uploadData(file, "www.drive.google.com");
    console.log("uploading await completed");
    console.log("Completed process with response: ", uploadResponse);
    return true;
}

console.log("Start");
processing();
console.log("End");