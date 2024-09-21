// Global varibales and Local variables
//global varibale  ba da function na bahar jory.de ta way global variable.
//local variable ba pa function danana jorave, aw andar ba ye  use ke, de ta way local variable.
//local var  pa global var ke nashe use kawre, aw global variable pa local variable ke use kaware she,
//global var har zai(jaga) ke use kaware she, global var pa function ke danana aw bahar dono main use krskte hai.
/*
var a = 'idrees khan';
function abc() {
    var b = 'Ashraf';
    console.log(b);
    //console.log(a);
};
abc();
*/
/*
var a = 12;
function abc() {
    var b = 51;
    // console.log('result', b);
    console.log('result', a);
};
abc();
*/
/*
// Global variable
var globalVar = "I am a global variable";

function printGlobalVar() {
    console.log(globalVar);  // Accessible inside this function
}

printGlobalVar();  // Output: "I am a global variable"
console.log(globalVar);  // Output: "I am a global variable"
*/
/*
function printLocalVar() {
    // Local variable
    var localVar = "I am a local variable";
    console.log(localVar);  // Accessible inside this function
}

printLocalVar();  // Output: "I am a local variable"
console.log(localVar);  // Error: localVar is not defined
*/

// Global variables: Represent the state of the entire cricket match
var totalRuns = 0;
var totalWickets = 0;
var totalOvers = 0;

function playOver() {
    // Local variables: Represent specific actions in a single over
    let runsInOver = 0;
    let wicketsInOver = 0;

    // Simulate each ball in the over (6 balls)
    for (let ball = 1; ball <= 6; ball++) {
        let runsOnBall = Math.floor(Math.random() * 7);  // Random runs from 0 to 6
        runsInOver += runsOnBall;
        totalRuns += runsOnBall;

        // Randomly simulate a wicket (assume 1/8 chance of losing a wicket)
        if (Math.random() < 0.125) {
            wicketsInOver++;
            totalWickets++;
        }
    }

    totalOvers++;  // Increment overs
    console.log(`Over ${totalOvers} Summary: Runs = ${runsInOver}, Wickets = ${wicketsInOver}`);
}

function matchSummary() {
    console.log(`Match Summary after ${totalOvers} overs:`);
    console.log(`Total Runs: ${totalRuns}`);
    console.log(`Total Wickets: ${totalWickets}`);
}

// Simulate a 5-over match
for (let i = 0; i < 5; i++) {
    playOver();
}

// Display the match summary
matchSummary();
