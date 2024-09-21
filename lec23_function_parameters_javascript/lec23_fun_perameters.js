// Function with parameters
/*
function fullname(fnmae, lname) {
    console.log('Hello' + fnmae + '' + lname + '<br>');

};
fullname('ashraf', 'khan');
fullname('ali', 'Raza');
fullname('sami', 'khan');

*/
/*
function fullname(ali, Raza) {
    fullname('Hello' + fname = 'asharf' + '' + lname = 'khan');
    console.log('Hello' + fname + ' ' + lname)

};
fullname();
*/
/*
function fullname(fname, lname) {
    // Use the passed arguments fname and lname to print the full name
    console.log('Hello ' + fname + ' ' + lname);
}


// Call the function with valid arguments
fullname('Ali', 'Raza');
*/
/*
function sum(a, b) {
    console.log(a + b + '<br>');

};

sum(25, 30);
sum(24, 98);
sum(20, 90);
sum(40, 80);
*/
/*
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(10, 45);  // Output: 50
console.log('The area of the rectangle is: ' + area);
*/
/*
function greetWithDefault(name = 'Guest') {
    console.log('Hello, ' + name + '!');
}

greetWithDefault();        // Output: Hello, Guest!
greetWithDefault('Ashraf'); // Output: Hello, Ashraf!

*/

function calculateDiscount(price, discountPercentage) {
    let discount = (price * discountPercentage) / 100;
    let finalPrice = price - discount;
    return finalPrice;
}

let discountedPrice = calculateDiscount(1050, 10);  // Output: 900
console.log('The discounted price is: ' + discountedPrice);
