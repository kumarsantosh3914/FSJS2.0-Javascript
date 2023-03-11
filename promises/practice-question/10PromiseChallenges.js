// Challenge 1: Promise Constructor
console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
})

console.log('end');


// Challenge 2: .then()
console.log('start');

const promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
})

promise2.then(res => {
    console.log(res);
})

console.log('end');

// Challenge 2: resolve()
console.log('start');

const promise3 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
})

promise3.then(res => {
    console.log(res);
})

console.log('end');

// Challenge 4: resolve() isn't called
console.log('start');

const promise4 = new Promise((resolve, reject) => {
    console.log(1);
})

promise4.then(res => {
    console.log(2);
})

console.log('end');

// Challenge 5: The One That's There to confuse You
console.log('start');

const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
}))

console.log('middle');

fn().then(res => {
    console.log(res);
})

console.log('end');

// Challenge 6: The One With a Fulfilling Promise
console.log('start');

// Analysis:: Here Promise.resolve(1) will return a Promise object 
// Whose state is fulfilled and the result is 1. It is synchronous code.
Promise.resolve(1).then((res) => {
    console.log(res);
})

Promise.resolve(2).then((res) => {
    console.log(res);
})

console.log('end');

// Challenge 7: setTimeout vs Promise
console.log('start');

setTimeout(() => {
    console.log('setTime');
})

Promise.resolve().then(() => {
    console.log('resolve');
})

console.log('end');

// Challenge 8: Microtasks mix macrotasks
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve('success');
        console.log("timerEnd");
    }, 0);
    console.log(2);
});

promise.then((res) => {
    console.log(res);
});

console.log(4);

// Challenge 9: Prioritise Between Microtasks and Macrotasks
const timer1 = setTimeout(() => {
    console.log('timer1');

    const promise1 = new Promise.resolve().then(() => {
        console.log('promise1');
    })
}, 0);

const timer2 = setTimeout(() => {
    console.log('timer2');
}, 0);

// Challenge 10: Typical Interview Question
console.log('start');

const promise5 = Promise.resolve().then(() => {
    console.log('promise5');
    const timer2 = setTimeout(() => {
        console.log('timer2');
    }, 0)
});

const timer3 = setTimeout(() => {
    console.log('timer3');
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2');
    })
}, 0);

console.log('end');
