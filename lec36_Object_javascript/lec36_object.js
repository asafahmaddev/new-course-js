// object

/*
let person = ['asaf', 'ahmad', 35];
console.log(person);
*/

/*
//let person = ['asaf', 'ahmad', 25];
let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 28
};
console.log(person);
*/

/*
let person = {
    firstName: 'asaf',
    lastName: 'ahmad'
    //age: 40
};
//da properity change rawale
person.firstName = 'sajjad'
person.lastName = 'khan'

console.log(person);
//console.log(person.firstName);
*/

/*
// Add properity
let person = {
    firstName: 'asaf',
    lastName: 'ahmad'
    //age: 40   // error
};
person.email = 'shenwatson480@gmail.com';

console.log(person);
*/

/*
//delete properity

let person = {
    firstName: 'asaf',
    lastName: 'ahmad'
    //age: 40   // error
};
delete person.lastName;
//delete person.firstName;
console.log(person);
*/

/*
// check properity

let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 40
};
//console.log(person.email);
// console.log('email' in person);
console.log('lastName' in person);
*/


/*
//all properity is show krna

let person = {
    firstName: 'asaf',
    lastName: 'ahmad'
    //age: 40   // error
};
for (let key in person) {
    //console.log(key);
    console.log(key + ': ' + person[key]);
};
*/

/*
let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 40,
    hobbies: ['listenting telawat', 'car driving', 'talking to people']


};
console.log(person);
// console.log(person.hobbies);
//console.log(person[2]);
*/

/*
let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 40,
    hobbies: ['listenting telawat', 'car driving', 'talking to people'],
    Living: {
        'city': 'islamabad',
        'country': 'pakistan'
    }
};
//console.log(person.Living);
console.log(person.Living.city);
*/

/*
let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 30,
    salary: function () {
        return 200000;
    }
};
console.log(person);

//console.log(person.salary);
*/

let person = {
    firstName: 'asaf',
    lastName: 'ahmad',
    age: 30,
    fullName: function () {
        //return this.firstName;
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName());

