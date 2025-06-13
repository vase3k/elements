'use strict';

const user = {
    name: 'alex',
    surname: 'Smith',
    [Symbol('age')]: 18,
    showMyPublication: function () {
        console.log(this.name, this.surname);
    },
};

//Object.defineProperties(user, { name: { writable: false } });

// Object.defineProperties(user, {
//     name: { enumerable: false },
//     showMyPublication: { enumerable: false },
// });
// writable
// enumerable
// configurable

//Object.freeze(user);
//console.log(Object.getOwnPropertyDescriptor(user, 'name'));

console.log(Object.getOwnPropertyDescriptor(user, Object.getOwnPropertySymbols(user)[0]));
Object.defineProperty(user, Object.getOwnPropertySymbols(user)[0], { value: 20 });
console.log(Object.getOwnPropertyDescriptor(user, Object.getOwnPropertySymbols(user)[0]));

const keys = Object.keys(user),
    values = Object.values(user),
    entries = Object.entries(user);
