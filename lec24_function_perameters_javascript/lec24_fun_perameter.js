// Function With parameters, Return value
/*
function fullname(fname, lname) {
    var a = 'Hello' + fname + '_' + lname + '<br>';
    return a;
};

var b = fullname('ali', 'ahmad')
console.log('result', b);
*/

console.log('Total subject -5 <br> Total Marks - 500 <br> <br>')

function sumMarks(DS, CS, DA, CG, AP) {

    var a = DS + CS + DA + CG + AP;

    return a;
};
var b = sumMarks(78, 86, 67, 80, 90);

console.log('Marks Obtain - ' + b + ' <br>');

//percentage

function percentage(tm) {

    var c = tm / 500 * 100

    return c;
};

var d = percentage(b);

console.log('percentage -' + d + '%');

/*
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(102, 5);  // Output: 50
console.log('The area of the rectangle is: ' + area);
*/
/*
function calculateArea(radius) {
    return Math.PI * radius * radius;  // Returns the area of the circle
}

let area = calculateArea(9);  // area is 254.46900494077323
console.log('Area: ' + area);  // Output: Area: 254.46900494077323
*/
/*
function isEven(number) {
    return number % 2 === 0;  // Returns true if the number is even, otherwise false
}

let result = isEven(6);  // result is true
console.log('Is the number even? ' + result);  // Output: Is the number even? true
*/
/*
function celsiusToFahrenheit(celsius) {
    return (celsius * 10 / 5) + 32;  // Returns the Fahrenheit equivalent of Celsius
}

let fahrenheit = celsiusToFahrenheit(40);  // fahrenheit is
console.log('Temperature in Fahrenheit: ' + fahrenheit);  // Output: Temperature in Fahrenheit: 
*/
/*
function findMax(a, b) {
    return (a >= b) ? a : b;  // Returns the larger of the two numbers
}

let max = findMax(10, 20);  // max is 20
console.log('The maximum value is: ' + max);  // Output: The maximum value is: 20
*/
/*
function reverseString(str) {
    return str.split('').reverse().join('');  // Returns the reversed string
}

let reversed = reverseString('asafahmad');  // reversed is 'olleh'
console.log('Reversed string: ' + reversed);  // Output: Reversed string:
*/