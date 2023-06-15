// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"All the world's a stage, and all the men and women merely players."`,
	person:`William Shakespeare`
}, {
    quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
    person:`John Kennedy`
}, {
    quote: `"Ask, and it shall be given you; seek, and you shall find."`,
    person:`The Bible`
}, {
    quote:`"Eighty percent of success is showing up."`,
    person:`Woody Allen`
}, {
    quote:`"Elementary, my dear Watson."`,
    person:`Sherlock Holmes (character)`
}, {
    quote:`"For those to whom much is given, much is required."`,
    person:`the Bible`
}, {
    quote:`"Frankly, my dear, I don't give a damn."`,
    person:`Rhett Butler`,
}, {
    quote:`"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person:`Thomas Edison`,
}, {
    quote:`"Go ahead, make my day."`,
    person:`Harry Callahan`
}, {
    quote:`"He travels the fastest who travels alone."`,
    person:`Rudyard Kipling`
}, {
    quote:`"Hell has no fury like a woman scorned."`,
    person:`William Congrev`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})