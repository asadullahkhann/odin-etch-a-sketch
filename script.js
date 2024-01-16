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

function makeBgDarker(e) {
    let filter = e.target.style.filter;
    let brightnessLevel = parseInt(filter.split('(')[1]);
    e.target.style.filter = `brightness(${brightnessLevel - 10}%)`;
    if(brightnessLevel === 0) {
        e.target.removeEventListener('moueseover', makeBgDarker);
    }
}

function handleMouseOver(e) {
    e.target.style.backgroundColor = getRandomRGB();
    e.target.addEventListener('mouseover', makeBgDarker);
    e.target.removeEventListener('mouseover', handleMouseOver);
}
