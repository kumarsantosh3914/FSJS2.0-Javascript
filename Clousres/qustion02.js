// Write a function that would allow you to do this

function createBase(num) {
    return function (innerNum) {
        console.log(innerNum + num);
    }
};

var addSix = createBase(6);
addSix(10); // return 16 
addSix(21); // return 27
