// Alart
alert("Hello World");
setTimeout(function () {
    alert("Hello JavaScript Developer");
}, 2000);

// Confirm box
let val = confirm("Are You Sure ?");
if(val) {
    document.getElementById("js").innerHTML = "He/She Pressed OK";
}
else {
    document.getElementById("js").innerText = "He/She Pressed Cancel";
}

// prompt
let value = prompt("Solve This 60 - 50");
if(value == 10) {
    document.getElementById("js").innerText = "Success";
}
else {
    document.getElementById("js").innerText = "Fail";
}