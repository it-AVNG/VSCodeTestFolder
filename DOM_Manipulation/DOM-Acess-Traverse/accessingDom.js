//DOM Manipulation
//Changing a styling of an element through javaScript
//Namely accessing the element css style but with javaScript
//this method is done through inline styling, only works on SINGLE element

const title = document.querySelector('#main-heading');
title.style.color = 'red';
//accessing attributes 
console.log(title.getAttribute('id'));
console.log(title);

//

const listItems = document.querySelectorAll('.list-items');
//use camel Case for snake like properties, like font-size to fontSize
//for QuerySelectorAll, they return a nodelist so we have to loop through

for (i=0; i<listItems.length; i++){

  listItems[i].style.fontSize = '2rem';

}
console.log(listItems);


//Create element

const ul = document.querySelector('ul');
const li = document.createElement('li');


//Adding element

ul.append(li);

// Modifying Text
li.innerText = 'X-men';
//Modify attributes and classes.

li.classList.add('list-items'); //(we can also li.classList.remove)
//check the class is available
console.log(li.classList.contains('list-items'));

//remove element
// li.remove();



const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);