// global scope
function sub() {
    var name = "Santosh Kuamr";
    // inner scope 2
    function displayName() {
        // inner scope
        alert(name);
    }
    displayName();
}

sub();