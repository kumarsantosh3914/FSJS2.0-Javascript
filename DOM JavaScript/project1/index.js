const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
// console.log(randomColor());


document.querySelector(".all").addEventListener("click", function() {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${event.clientY - 10}px`;
    circle.style.left = `${event.clientX - 10}px`;
    circle.style.backgroundColor = `${randomColor()}`;
    document.querySelector(".all").append(circle);

    setTimeout(() => {
        circle.remove();
    }, 1000);
});

