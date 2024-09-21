//How to make HTML element by javascript, DOM

var newDiv = document.createElement('div');
//console.log(newDiv);

//add class

newDiv.className = 'box';

//add id
newDiv.id = 'textBox';

//console.log(newDiv)



//create text node
var newDivText = document.createTextNode("asaf will teach all of these courses");
// console.log(newDivText);

// Add text to div
newDiv.appendChild(newDivText);
//console.log(newDiv);

//show in the body all of these

var container = document.querySelector('#content');

var form = document.querySelector('form');
// container.insertBefore(newDiv, form);

newDiv.style.color = 'red';
newDiv.style.backgroundcolor = 'yellow';
newDiv.style.border = '3px solid gray';
newDiv.style.margin = '30px 90px 20px 0px';

container.insertBefore(newDiv, form);


