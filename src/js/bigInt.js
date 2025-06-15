'use strict';

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Math.pow(2, 53));

const bigInt = 90071992547409911n;

const sameBigInt = BigInt('900719925474099111');

const bignumber = 1n;
let number = 2;

console.log(bignumber + BigInt(number));
console.log(Number(bignumber) + number);
