// Loops

// for

// for (initialExpression; condition; incrementExpression;) {
//      statement
// }

for (let i = 0; i < 5; i++) {
    console.log('Hello Word', i);
}

// Assume we want to print the odd number between 1 and 100:
// We can do this with the for loop and implementing the module operand
// to retrieve the division reminder

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) console.log(i);

}

console.log('-----------------------------')

for (let i = 100; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);

}

// The same logic of above.... with WHILE Loop
// while (condition) {
// statement
// }

//
// let i = 0;
//
// while (i <= 100) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
//
// }

// do...while

let i = 0;

do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 100)
