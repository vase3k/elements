'use strict';

const box = document.querySelector('.box');

const newHeight = 300;
const newWidth = 300;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

//console.log(userName ?? userKey ?? 'User');

const box2 = document.querySelector('.box'),
    block = document.querySelector('.block');

//block?.textContent = '123'

const userData = {
    name: 'ivan',
    age: 15,
    say: function () {
        console.log(this.age);
    },
};

// console.log(userData.skills?.js);

// console.log(userData.name);

// userData.hi?.();

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach((box) => {
    if (box.matches('.this')) console.log(box, 'has this');
});

console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery);
// console.log(boxesGet);
