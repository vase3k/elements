'use strict';

const salaries = {
    name: 500,
    ivan: 1000,
    ann: 5000,
    SayHello: function () {
        console.log(this.john + 'salary is');
    },
};

const userMap = new Map(Object.entries(salaries));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{ paper: 4000 }, 8000],
    [{ cars: 3000 }, 43500],
]);

shops.forEach((e, i) => {
    map.set(e, budget[i]);
});

// console.log(map.has(shops[0]));
// map.delete(shops[2]);
// map.clear();

let shopsKeys = [];
for (let shop of map.keys()) shopsKeys.push(Object.keys(shop)[0]);

// for (let [shop, value] of map.entries()) {
//     console.log(shop, value);
// }

// map.forEach((value, i, map) => {
//     console.log(i, value);
// });
