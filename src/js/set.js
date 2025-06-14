'use strict';

const arr = [1, 1, 2, 2, 3, 4, 5, 6];
const arrAdd = [1, 1, 1, 2, 3, 4, 5, 22, 34, 55];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arrAdd));

// const set = new Set(arr);

// arrAdd.forEach((e) => {
//     if (!arr.includes(e)) {
//         arr.push(e);
//     }
// });

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
