// Break ,continue statement

/*
for (let counter = 1; counter <= 10; counter++) {

    console.log(counter);
   // console.log('<br>');
}
   */


//continue ststement


for (let counter = 1; counter <= 10; counter++) {

    if (counter == 5)// condition main andar jobe number hai who pront nahi hoga
    {
        continue;
    }
    console.log(counter);
    //console.log('<br>');
}
console.log('Done')


//Break statement
/*
for (let counter = 1; counter <= 20; counter++) {

    if (counter == 10) {

        break; // Exit the loop when i is 5
    }
    console.log(counter);
    //console.log('<br>');
}
console.log('Done');
*/
