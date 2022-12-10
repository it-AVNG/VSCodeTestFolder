//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
{ quote: `"If books are not good company, where will I find it?"`,
  person: `Mark Twain`
},
{ quote: `"As long as I have health and strength, I will gladly work all my days"`,
  person: `Frederic Chopin`
},
{ quote: `"The first method for estimating the intelligence of a ruler is to look at the men he has around him."`,
  person: `Niccolo Machiavelli`
},
{ quote: `"I do not think you can name many great inventions that have been made by married men."`,
  person: ` Nikola Tesla `
},
{ quote: `"Science is a differential equation. Religion is a boundary condition."`,
  person: `Alan Turing`
},
{ quote: `"花より団子-Dumplings over flowers "`,
  person: `Japanese Proverbs`
},
{ quote: `"If heaven gives me ten more years, or an extension of even five years, I shall surely become a true artist."`,
  person: `Hokusai`
},
{ quote: `"Resentment and complaint are appropriate neither for oneself nor others."`,
  person: `Miyamoto Musashi`
},];

btn.addEventListener('click', function(){

  //randomize a number and rounded down to the nearest integer

  let random = Math.floor(Math.random() * quotes.length);

  //display the quote in string format using innerText

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;


})