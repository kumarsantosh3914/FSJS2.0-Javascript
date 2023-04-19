// Time optimization

function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");