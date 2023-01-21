function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = undefined;
            console.log("Download completed");
            if(typeof data == "undefined") {
                reject(data);
            }
            else {
                resolve(data);
            }
        }, 3000);
    });
}

let x = fetchData("www.google.com");
x.then(function success(v) {
    console.log("value is ", v);
    return 10;
})
.then(function success1(v) {
    console.log("value again is", v);
    // thow {error: "new error"}
})
.catch(function errorHandle(err) {
    console.log("error is ", err);
})
.finally(() => {
    console.log("Experiment completed");
});