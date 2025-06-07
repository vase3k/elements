'use strict';

// function power(num, pow) {
//     if (pow === 0) return 1;
//     while (pow > 1) {
//         num *= num;
//         pow--;
//         return power(num, pow);
//     }
//     return num;
// }

// console.log(power(2, 0));

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(pow(2, 0));

function pow(x, n) {
    if (n === 0) return 1;
    // return n === 1 ? x : x * pow(x, n - 1);
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

let students = {
    js: [
        {
            name: 'john',
            progress: 100,
        },
        {
            name: 'ivan',
            progress: 60,
        },
    ],
    html: {
        basic: [
            {
                name: 'peter',
                progress: 20,
            },
            {
                name: 'ann',
                progress: 18,
            },
        ],
        pro: [
            {
                name: 'sam',
                progress: 10,
            },
            {
                name: 'sam',
                progress: 10,
            },
            {
                name: 'sam',
                progress: 10,
            },
        ],
    },
};
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (const subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

function getProgress(data) {
    if (Array.isArray(data)) {
        let res = 0;
        for (let array of data) {
            res += array.progress;
        }
        return [res, data.length];
    } else {
        let res = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getProgress(subData);
            res[0] += subDataArr[0];
            res[1] += subDataArr[1];
        }

        return res;
    }
}

function factorial(n) {
    // if (!Number.isInteger(n) || typeof n !== 'number') return 'дробное число не подходит';
    // return n > 0 ? n * factorial(n - 1) : 1;

    return !Number.isInteger(n) || typeof n !== 'number'
        ? 'дробное число не подходит'
        : n > 0
        ? n * factorial(n - 1)
        : 1;
}

console.log(factorial(5));
