'use strict';

const user = {
    name: 'alex',
    surname: 'Smith',
    [Symbol('age')]: 18,
    showMyPublication: function () {
        console.log(this.name, this.surname);
    },
};

for (const key of Object.keys(user)) {
    //  console.log(user[key]);
}

const arr = [1, 2, 3, 4];

Array.prototype.something = function () {};

for (const key of arr) {
    // console.log(key);
}

// const str = 'gggvob';

// for (const key of str) {
//     console.log(key);
// }
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

// console.log(Object.getOwnPropertyDescriptor(user, Object.getOwnPropertySymbols(user)[0]));
// Object.defineProperty(user, Object.getOwnPropertySymbols(user)[0], { value: 20 });
// console.log(Object.getOwnPropertyDescriptor(user, Object.getOwnPropertySymbols(user)[0]));

// const keys = Object.keys(user),
//     values = Object.values(user),
//     entries = Object.entries(user);

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    SayHello: function () {
        console.log(this.john + 'salary is');
    },
};

salaries[Symbol.iterator] = function () {
    return {
        currency: this.john,
        last: this.ann,

        next() {
            if (this.currency < this.last) {
                this.currency = this.currency + 500;
                return { done: false, value: this.currency };
            } else {
                return { done: true };
            }
        },
    };
};

const iterator = salaries[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }
