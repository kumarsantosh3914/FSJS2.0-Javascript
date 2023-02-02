const obj = {
    name: "Santosh",
    display: function() {
        console.log(this, "is the calling site");
    }
}

const obj1 = {
    name: "Suman",
    display: () => {
        console.log(this, "is the calling site");
    }
}

obj.display();
obj1.display();