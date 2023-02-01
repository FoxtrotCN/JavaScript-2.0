// Functions

// Function Declaration

function walk() {
    console.log('walk');
}

//  Anonymous Function Expression

const run = function () {
    console.log('run');
};

let move = run;
run();
move();

// Deference between them

// With function declaration we can make the call to that function
// just before we declare it.

// With function expression we cannot do this because is like to
// print in console a variable before its declaration. The result of this
// will be a ReferenceError.

// The reason behind we can call a function with declaration syntax is
// called: Hoisting. This works by the JS engine executing the code.
// Hoisting is the action of moving the functions to the top of the file.


// Arguments

function sum() {
    console.log(arguments);
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 5, 6, 7, 8, 9, 100));