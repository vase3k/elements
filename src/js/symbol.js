'use strict';

let id = Symbol('id');

const obj = {
    name: 'test',
    [id]: 2,
    [Symbol.for('id2')]: 3,
    getId: function () {
        return this[id];
    },
};

// let id = Symbol('id');
// let id2 = Symbol('id');
// obj[id] = 1;
// obj[id2] = 2;

const symbolArr = Object.getOwnPropertySymbols(obj);
const symbol2 = Object.getOwnPropertySymbols(obj)[0];

console.log(obj[Symbol.for('id2')]);
