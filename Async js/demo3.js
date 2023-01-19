function process() {
    console.log("Start");
    for(var i = 1; i < 3; i++) {
        setTimeout(function exec() {
            console.log("Executed after some time");
        }, 3000);
        console.log("Inside for loop"); 
    }
    for(var j = 0; j < 1000000; j++) {
        // something
    }
    console.log("End");
}

process();