/*
https: //api.unsplash.com/photos/?client_id=nRNbGIZYuossJDoZOXyj9exq8yYjgMYL7NiJ0dFPJc4
*/


const prevBtn = document.querySelector('.prevBtn'),
    nextBtn = document.querySelector('.nextBtn'),
    images = document.querySelector('.images');

let counter = 1;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    counter++;
    console.log(counter);

    images.style.backgroundImage = `url(images/${counter}.jpg)`;
    if (counter === 6) counter = 0;

}

function prevSlide() {
    images.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    })
    counter--;

    console.log(counter);
    if (counter === 0) counter = 6;
    images.style.backgroundImage = `url(images/${counter}.jpg)`;


}