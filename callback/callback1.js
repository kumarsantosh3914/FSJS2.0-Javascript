function fun(x, fn) {
    /***
     * x -> number
     * fn -> callback function
     */

    // some logic
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();
}

fun(10, function log() {
    // this is the call back function
    console.log("Custom logger");
});