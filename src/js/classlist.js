'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

wrapper.addEventListener('click', (event) => {
    event.target.matches('button') && event.target && event.target.classList.toggle('red');
});

const btn = document.createElement('button');
btn.textContent = 'added button';
btn.classList.add('red');
wrapper.append(btn);
