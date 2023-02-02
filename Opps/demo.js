var obj = {
    name: "Santosh",
    company: "Google",
    display: () => {
        console.log(this.name, "works in", this.company);
    }
}

var obj1 = {
    name: "JD",
    company: "Microsoft",
    display: () => {
        setTimeout(() => {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

var obj2 = {
    name: "Suman",
    company: "Phonepay",
    display: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

obj2.display();