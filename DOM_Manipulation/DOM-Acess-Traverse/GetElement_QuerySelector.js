//DOM Manipulation




//GetElementById

//select the object with specific Id and put it into a variable
const title = document.getElementById('main-heading');

console.log(title);


//GetElementByClassName

// const listItem = document.getElementsByClassName('list-items');

// console.log(listItem);


//GetElementByTagName
//similar as above but with the element tag, returns an HTML array-like

const listItem = document.getElementsByTagName('li');

console.log(listItem);

//querySelector: select the 1st item that match the selector criteria
const container = document.querySelector('div');

console.log(container);


//querySelectorAll: select ALL items that match the criteria, returns Nodelist array

// const container = document.querySelectorAll('div');

// console.log(container);


