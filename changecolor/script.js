const colorbtn = document.querySelector('.colorbtn');
const body = document.querySelector('body');
const colors = ['yellow', 'red', 'green', '#3b5998'];

colorbtn.addEventListener('click', changeColor);

function changeColor() {
    const randomnum = Math.floor(Math.random() * colors.length);
    console.log(randomnum);
    body.style.backgroundColor = colors[randomnum];
}