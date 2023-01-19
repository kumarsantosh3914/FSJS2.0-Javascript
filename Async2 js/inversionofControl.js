function fun(inputString, fn) {
    // internal function
    // executes some algorithm on the string
    let output = inputString.split(',') // output is an array
    for(let i = 0; i < output.length; i++) {
        fn(output[i]);
        fn(output[i]);
    }
}

// using it
fun("name:Santosh, subject:CSE", function process(ip) {
    let arr = ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
});