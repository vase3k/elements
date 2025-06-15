'use strict';

function amountOfPages(summary) {
    let str = '';
    let res = 1;

    for (let i = 1; i <= summary; i++) {
        str += i;
        if (str.length >= summary) {
            res = i;
            break;
        }
    }
    return res;
}

function isPangram(string) {
    const uniqueChar = new Set(string.toLowerCase().replace(/[^a-z]/gi, ''));
    return uniqueChar.size === 26;
}

const arr3 = [1, 2, 3]; // 3
const arr7 = [1, 2, [3, 4, [5]]]; // 7

function deepCount(a) {
    let count = 0;
    (function deepArray(a) {
        a.forEach((e) => {
            if (Array.isArray(e)) {
                count++;
                deepArray(e);
            } else {
                count++;
            }
        });
    })(a);
    return count;
}

console.log(deepCount(arr7));
