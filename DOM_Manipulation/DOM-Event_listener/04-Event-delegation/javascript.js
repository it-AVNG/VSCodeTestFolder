
//Change an property attributes when event happended
// document.querySelector('#football').addEventListener(
//   "click", function(e) {
//     console.log('football is clicked');
//     console.log(e)
//     const target = e.target;

//     if(target.matches('li')) {
//       target.style.backgroundColor = '#024e47'
//     }
//   }
//)

//we can repeat it 4 more times, or we can do better
//we can achive a better results with the deligation of the parrent
document.querySelector('#sports').addEventListener(
  "click", function(e) {
    
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target =e.target;

    if (target.matches('li')){
      target.style.backgroundColor = '#024e47';
    }
  }
);

const sports =document.querySelector('#sports');
const newSport = document.createElement('li');


//we can create a new element without care to add the eventListener
//due to the parrent has already have the task delegated
newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');
newSport.setAttribute('class', 'list-items');
sports.appendChild(newSport);