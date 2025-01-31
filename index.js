const options = {
    rootMargin: "-265px",
    threshold: 0,
};

const target = document.querySelector(".divEncabezado");
const navbar = document.querySelector(".navbar");
const desplegable = document.querySelector("#desple");

const changeColor = function(color) {
    navbar.style.transition = '0.5s'
    navbar.style.backgroundColor = color;
    desplegable.style.transition = '0.5s'
    desplegable.style.backgroundColor = color;
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            changeColor('transparent')
        } else {
            changeColor('black')
        }
    });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target);
