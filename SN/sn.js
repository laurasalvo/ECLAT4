// const mainDiv = document.querySelector('.divTitulo');
// const header = document.querySelector('header');
// const nav = document.querySelector('#menu');
// const desplegable = document.querySelector('#desple');

// header.style.transition = '0.5s';
// nav.style.transition = '0.5s';

// const callback = (entries, observer) => {
//     entries.forEach((entry) => {
//       if(entry.isIntersecting) {
//         header.style.backgroundColor = 'white';
//         header.style.color = 'black';
//         nav.style.backgroundColor = 'white';
//         nav.style.color = 'black';
//         nav.querySelectorAll('a').forEach(a => a.style.color = 'black');
//         desplegable.style.backgroundColor = 'white';
//         desplegable.style.color = 'black';
//       } else {
//         header.style.backgroundColor = 'black';
//         header.style.color = 'white';
//         nav.style.backgroundColor = 'black';
//         nav.style.color = 'white';
//         nav.querySelectorAll('a').forEach(a => a.style.color = 'white');
//         desplegable.style.backgroundColor = 'black';
//         desplegable.style.color = 'white';
//       }
//     });
//   };
  

// const options = {
//     rootMargin: "1px",
//     threshold: 0.9818,
//   };
  
//   const observer = new IntersectionObserver(callback, options);

//   observer.observe(mainDiv)
