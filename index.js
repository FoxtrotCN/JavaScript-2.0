// Operators

// Logical Operator
// AND / OR / NOT

// AND &&: return true if both operands are TRUE

/*let higIncome = true;
let goodCreditScore = true;
let elegibleForloan = higIncome && goodCreditScore;

console.log(elegibleForloan);*/

// OR ||: Returns True if one operand is TRUE

/*let higIncome = true;
let goodCreditScore = false;
let elegibleForloan = higIncome || goodCreditScore;

console.log(elegibleForloan);*/

// NOT !: Change the operand value

/*let higIncome = false;
let goodCreditScore = false;
let elegibleForloan = higIncome || goodCreditScore;
console.log('Elegible: ' + elegibleForloan);

let applicationRefused = !elegibleForloan;
console.log('Refused: ' + applicationRefused);*/

// Using the OR || operator in non-boolean values:
// Real life example: Let's assume we're building an app
// where the user is buying a t-shirt,
// and he needs to pick a color, if not,
// we set a color by default.

let userColor = 'red';
let defaultColor = 'blue';
console.log(userColor || defaultColor); // We got red

// Now, suppose the user color is empty or undefined:

let userColor2 = '';
let defaultColor2 = 'blue';
console.log(userColor2 || defaultColor2);
