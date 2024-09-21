var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

function feetToInches() {
    let f = parseFloat(feet.value);
    let i = f * 12;
    inch.value = i;
}

function inchesToFeet() {
    let i = parseFloat(inch.value);
    let f = i / 12;
    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    }
    feet.value = f;
}

feet.addEventListener('input', function () {
    feetToInches();
});

inch.addEventListener('input', function () {
    inchesToFeet();
});
//

var feet = document.getElementById('feet');

var inch = document.getElementById('inch');

feet.addEventListener('input', function () {
    // console.log('changed')

    let f = this.Value;
    let i = f * 12;
    inch.Value = i;
});

feet.addEventListener('input', function () {
    // console.log('changed')

    let i = this.Value;
    let f = i / 12;
    inch.Value = i;
    //feet.Value = f;

    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    };
    feet.Value = f;
});

