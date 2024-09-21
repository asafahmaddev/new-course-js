//loop
// for loop, while loop, and do while loop



//for loop

for (let i = 1; i <= 5; i++)

//for (let i = 3; i <= 5; i++) 

//for (let i = 1; i <= 10; --i)
{
    console.log(i);
}
console.log('done');

/*
// For loop - counts from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('done');

// Example for odd numbers between 1 and 10
for (let i = 1; i <= 10; i++) {
    // Prints odd numbers only
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log('done');
*/
//example for loop

/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0)// even number
        //if (i % 2 !== 0) //odd number
        console.log(i);
}
console.log('done');
*/
/*
// While loop - counts from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('Done');
*/

//while loop
/*
let i = 1;
while (i <= 10)

//NON STOP
//while (i => 10)
{
    console.log(i);
    i++;
}
console.log('Done');
*/
/*
//do while loop

let i = 112;
do {
    console.log(i);

    i++;

}
while (i <= 130);
console.log('Done');
*/

//do while loop example
/*
let password;
do {
    password = prompt('what is the password');

}
while (password !== 'asafahmad');
console.log('Done');
*/
/*
// Do-while loop for password prompt (browser-based)
let password;
do {
    password = prompt('What is the password?');
} while (password !== 'asafahmad');
console.log('Correct password entered, Done!');
*/

let password;
do {
    // Prompt user to enter the password, only in browser environments
    password = prompt('What is the password?');

    // You can handle the case if prompt returns null (e.g., when the user cancels the prompt)
    if (password === null) {
        console.log('Prompt canceled by the user.');
        break;  // Exit the loop if user cancels the prompt
    }
} while (password !== 'asafahmad');

if (password === 'asafahmad') {
    console.log('Correct password entered, Done!');
}

