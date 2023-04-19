// Make the run only once

let view;
function likeThe() {
    let called = 0;

    return function () {
        if (called > 0) {
            console.log("Already called");
        } else {
            view = "Santosh Kumar";
            console.log("Subscribe to", view);
            called++;
        }
    };
}

let isall = likeThe();
isall();
isall();
isall();