// How can I write a sleep function using a promise?

function sleep(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    })
}

sleep();

// What is the output of the following code ?
const promise1 = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
})
    .catch(error => console.log(error))
    .then(error => console.log(error));

// What is the output of the following code ?
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    // output = 2
    return v * 2;
})
    .then(v => {
        console.log(v);
        // output = 4
        return v * 2;
    })
    .finally(v => {
        console.log(v)
        // output = undefind
        return v * 2;
    })
    .then(v => {
        console.log(v);
        // output = 8
    });

// explanation
/**
 * The finally block doesn’t receive any value, and anything returned from
 * finally is not considered in the then block so the output from the last then is
 * used.
 */

