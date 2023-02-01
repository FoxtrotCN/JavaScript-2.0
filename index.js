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

/*function sum() {
    console.log(arguments);
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 5, 6, 7, 8, 9, 100));*/

// A better approach of the previous function
// Working with the rest operator

/*function sum(...prices) {
    return prices.reduce((a, b) => a + b);
}
console.log(sum(1, 21, 3, 4, 5, 6));*/

// Let's assume we got a cart, and we need to calculate
// the total of it and given a discount
// We can do this

function cartSum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    console.log(total);
    return Math.floor(total * (1 - discount));
}

console.log(cartSum(0.15, 12, 15, 30, 25));

// Default parameters

// Let's assume we got a function to calculate
// the interest for a loan

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));


// Getters and Setters

/*
const person = {
    firstName: 'Fer',
    lastName: 'Cedeno',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);

person.fullName = 'John Smith';

console.log(person);
*/


// Try and Catch - Error handling

const person = {
    firstName: 'Fer',
    lastName: 'Cedeno',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value must be a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Please provide a name and a last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
try {
    person.fullName = 'Fernando Cedeno';
}

catch (e) {
    alert(e);
}


console.log(person);


// this

// this keyword reference the object that is executing
// the current function

// method -> object
// function -> global (window, global)

/*const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();*/


// A better approach is working with arrow functions =>

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();


// Exercises

// 1- Sum of arguments
//
// We must implement a function that takes x arguments
// and return its sum. This time, sum must be => 10.
//
// The function must accept arrays as an arguments
// and adding as well.
//
// We must validate if the array given is valid.

// const addition = sum(1, 2, 3, 4);
// console.log(addition);

// function sum(array, ...numbers) {
//     const copyOfArray = [...array];
//     if (Array.isArray(array))
//         for (let i = 0; i <= copyOfArray.length; i++)
//
//     return numbers.reduce((a, b) => a + b);
// }

const numbers = sum([1, 2, 3, 4]);
console.log(numbers);

function sum(...numbers) {
    console.log(numbers);
    if (numbers.length === 1 && Array.isArray(numbers[0]))
        numbers = [...numbers[0]];
    return numbers.reduce((a, b) => a + b);
}
