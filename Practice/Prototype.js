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
    // __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

// Goal get truelength of string

// let yourname = "santosh"

// string.prototype.truelength = function() {
//     console.log(`${this.name}`);
//     console.log(`true length is: ${this.trim().length}`);
// }

let myname = "santosh   ";

// inheritance and the prototype  chain
const parent = {
    value: 2,
    method() {
        return this.value + 1;
    }
};

// When calling parent.method in this case, 'this' refers to parent
console.log(parent.method()); // 3

// child is an object that inherits from parent
const child = {
    __proto__: parent,
};

// When child.method is called, 'this' refers to child. So when child inherits the mothod of parent, The property 'value' is sought on child.
// However, since child doesn't have an own propety called 'value', the property is
// found on the [[Prototype]], which is parent.value.
console.log(child.method()); // 3

child.value = 6; // assign the value 6 to the property 'value' on child.

console.log(child.method()); // 7
// Since child now has the 'value' property, 'this.value' means
// child.value instead
