function Product(n, p) {
    // console.log(this);
    this.name = n;
    this.price = p;

    this.display = function () {
        console.log(this.name, this.price);
    };
    // return this;
}

const p2 = Product("iphone", 83927984);
console.log(p2);