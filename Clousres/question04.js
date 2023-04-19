// Block scope and setTimeout

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // what is logged?
        }, i * 1000);
    }
}

a();

for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000);
    }

    inner(i);
}