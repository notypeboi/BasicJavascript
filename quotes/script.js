const simpleQuotes = [{
        name: 'author ',
        quotes: 'qutos number '
    },
    {
        name: 'author ',
        quotes: 'qutos number '
    },
    {
        name: 'author ',
        quotes: 'qutos number '
    },
    {
        name: 'author ',
        quotes: 'qutos number '
    }
]
const newQUotes = simpleQuotes.map((elem, index) => {
    elem.name = `author ${index+1}`
    elem.quotes = `quotes ${index+1}`
    return elem;
});
console.log(newQUotes);

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {

    let number = Math.floor(Math.random() * newQUotes.length);
    quoteAuthor.innerHTML = newQUotes[number].name;
    quote.innerHTML = newQUotes[number].quotes;

}