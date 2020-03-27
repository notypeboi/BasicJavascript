let counter = document.querySelector('.counter');

const lowCount = document.querySelector('#lowerCounterBtn');
const addCount = document.querySelector('#higherCounterBtn');

let count = 0;

addCount.addEventListener('click', increase);
lowCount.addEventListener('click', decrease);

function increase() {
    count += 1;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red'
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duraction: 500,
        fill: 'forwards'
    });

}

function decrease() {
    count -= 1;

    counter.innerHTML = count;
}