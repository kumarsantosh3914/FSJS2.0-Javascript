let myHeros = ["thor", "spiderman"];
let dcHero = ["batman", "black adam", "superman"];

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpinerPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.santosh = function() {
    console.log(`Santosh is present in all objects`);
}

Array.prototype.heySantosh = function() {
    console.log(`Santosh says hello`);
}

myHeros.santosh();

// inheritance
const User = {
    name: "top name",
    email: "topuser@gamil.com",
}

const Teacher = {
    makeVideos: true
}

const TSAssistant = {
    makeAssignment: "JS assignmet",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Goal get truelength of string

// let yourname = "santosh"

string.prototype.truelength = function() {
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

let myname = "santosh   ";