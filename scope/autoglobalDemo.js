var teacher = "Hitesh";
function fun() {
    var teacher = "Anurag";
    teachingAssistant = "Santosh";
    console.log(teacher);
    console.log(teachingAssistant);
}

console.log(teachingAssistant); // autoglobal
fun();
console.log(teacher) // Hitesh