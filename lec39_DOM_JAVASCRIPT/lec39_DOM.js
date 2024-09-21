// dom
/*
var headerTitle =
    document.getElementById('header-title');

headerTitle.textcontent = "computer course";
headerTitle.innerText = "pro course";
console.log(headerTitle);


var headerTitle =
    document.getElementById('header-title');
headerTitle.innerHTML = <h1>Hello</h1>;

var header = document.getElementById('header');
header.style.borderBottom = '1px solid #000';
*/
// Corrected JavaScript code

// Getting the header title by its correct ID
var headerTitle = document.getElementById('header-Title');

// Updating the text content and inner text
headerTitle.textContent = "computer course"; // Correct the casing
headerTitle.innerText = "pro course"; // It will overwrite textContent

console.log(headerTitle);

// Updating innerHTML
headerTitle.innerHTML = "<h1>Hello</h1>";

// Styling the header
var header = document.getElementById('header');
header.style.borderBottom = '1px solid #000';
