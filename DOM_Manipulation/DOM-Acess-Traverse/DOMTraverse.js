//DOM navigation

//parent node traversal
let ul = document.querySelector('ul');

console.log(ul.parentNode);
console.log(ul.parentElement);


const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);


//child node traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//sibling traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);