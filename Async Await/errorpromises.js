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

let x = fetchData("Santosh");
x.then(function success(value) {
    console.log("value is", value);
}, function err(err) {
    console.log("error is", err);
})
.then(function success1(v) {
    console.log("value again is", v);
})