// Tasks:
/**
 * 1. Write a function to download data from a url
 * 2. Write a function to save that download data in a file and return the filename
 * 3. Write a function to upload the file written in previous step to a newurl
 */

function fetchCustom(url, fn) {
    /**
     * download content of the url
     * this downloading can take sometime,
     * we will download the content from url, and then whatever is the result, we will pass to the callback.
     */
    console.log("Starting downloading from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    }, 3000);
}

function writeFile(data, fn) {
    // this function writes data in a new file
    console.log("Starting writing data", data);
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.text";
        fn(filename);
    }, 4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("upload started");
    setTimeout(function process() {
        console.log("File", filename, "uploading successfully");
        let uploadResponse = "SUCCESS";
        fn(uploadFile);
    }, 2000);
}


fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is", response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("New file written is", filenameResponse);
        uploadFile(filenameResponse, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
        });
    });
});