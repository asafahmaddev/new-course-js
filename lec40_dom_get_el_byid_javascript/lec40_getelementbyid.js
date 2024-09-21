//DOM: Document Object Model in Javascript
// getElementByclassName
// getElementByTagName


/*
//className

var items = document.getElementsByClassName('list-item');
//console.log(item[3])

items[1].textcontent = 'animation';
items[2].textcontent = 'graphics';
items[1].textcontent = 'web';

items[2].style.fontWeight = 'bold';

items[2].style.color = 'red';

// items[2].style.backgroundcolor = 'green';//single line color 

//double or all backgrounds color changes
for (var i = 0; i < items.length; i++) {
    items[i].style.backgrouncolor = 'blue'

};

*/

//TagName
/*
var li = document.getElementsByTagName('li');
//console.log(item[3])

li[1].textcontent = 'animation';
li[2].textcontent = 'graphics';
li[1].textcontent = 'web';

li[2].style.fontWeight = 'bold';

li[2].style.color = 'red';

// li[2].style.backgroundcolor = 'green';//single line color 

//double or all backgrounds color changes
for (var i = 0; i < li.length; i++) {
    li[i].style.backgrouncolor = 'blue'

}
console.log(li);
*/

// Using className
var items = document.getElementsByClassName('list-item');

// Modify content and style for specific items
items[1].textContent = 'Animation';
items[2].textContent = 'Graphics';

// Apply styles to the third item
items[2].style.fontWeight = 'bold';
items[2].style.color = 'red';

// Apply background color to all items
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'blue'; // Fixed to backgroundColor
}

// Using tagName
var li = document.getElementsByTagName('li');

// Modify content for list items by tag name
li[1].textContent = 'Animation';
li[2].textContent = 'Graphics';

// Apply styles to the third item
li[2].style.fontWeight = 'bold';
li[2].style.color = 'red';

// Apply background color to all list items
for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'blue'; // Fixed to backgroundColor
}

console.log(li);







