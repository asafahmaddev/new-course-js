let input = "";
let minLength = 5;
let maxLength = 10;

do {
    input = prompt(`Enter a value between ${minLength} and ${maxLength} characters:`);

    if (input.length < minLength) {
        alert(`The input is too short. It must be at least ${minLength} characters.`);
    } else if (input.length > maxLength) {
        alert(`The input is too long. It must be no more than ${maxLength} characters.`);
    }

} while (input.length < minLength || input.length > maxLength);

alert(`Your input is valid: ${input}`);