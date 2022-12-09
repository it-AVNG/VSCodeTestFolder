//DOM manipulation

// Event Listeners

// element.addEventListener("click", function);

const button2 = document.querySelector('.btn-2');

function alertBtn() {
  alert('I Also love JavaScript');
}

button2.addEventListener("click", alertBtn);

// Mouseover event

const button3 = document.querySelector('.btn-3');
console.log(button3.type)
function changebgColor(){
  button3.style.backgroundColor = 'blue';
}

button3.addEventListener("mouseover",changebgColor)