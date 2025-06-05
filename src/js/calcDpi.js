'use strict';

function calcDpi(width, height, inch) {
    return (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / inch).toFixed();
}

const resolution = {
    'full HD': { width: 1920, height: 1080 },
    '4k': { width: 3820, height: 2160 },
    '2k': { width: 2560, height: 1440 },
    '5k': { width: 5120, height: 2880 },
};
const screens = [24, 27, 32, 40, 42, 43];

for (let screen of screens) {
    for (let key in resolution) {
        const { width, height } = resolution[key];
        const dpi = calcDpi(width, height, screen);
        ((dpi >= 108 && dpi <= 112) || (dpi >= 200 && dpi <= 250)) &&
            console.log(`${width}x${height} at ${screen} = ${dpi} dpi`);
    }
}
