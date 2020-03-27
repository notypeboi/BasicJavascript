const body = document.querySelector('body');
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');

const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumber.length)
        console.log(random);
        hexColor += hexNumber[random];
        console.log(hexColor);
    }
    hex.innerHTML = hexColor;
    body.style.background = hexColor;
}