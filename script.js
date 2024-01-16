const inputEl = document.querySelector('input');

const para = document.querySelector('p');

const gridContainer = document.querySelector('.grid-container');

const resetBtn = document.querySelector('button');

function getRandomRGB() {
    const rgbValues = [];
    const randomRGBValue = [];
    for(let i = 1; i < 256; i++) {
        rgbValues.push(i);
    }
    for(let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * rgbValues.length);
        randomRGBValue.push(rgbValues[randomNumber]);
    }
    return `rgb(${randomRGBValue.join(',')})`;
}