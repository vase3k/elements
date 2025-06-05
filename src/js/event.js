'use strict';

const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');
// btn.onclick = (e) => {
//     console.log(e.target);
// };

let i = 0;

const deleteElement = (e) => {
    console.log(e.target, e.currentTarget, e.type);
    // i++;
    // if (i == 1) {
    //     e.currentTarget.removeEventListener('click', deleteElement);
    // }
};

btn.forEach((e) => {
    e.addEventListener('click', deleteElement, { once: true });
});

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});
