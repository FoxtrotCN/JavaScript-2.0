// Exercises

// 1 - Write a function that takes two numbers and returns the maximum
// of the two.

function maximumOfTwo(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

let attempt1 = maximumOfTwo(2, 1);
console.log(attempt1);

// 2 - Implement a function that takes 2 parameters that returns true if the images is landscape

// function isLandScape(width, height) {
//     return (width > height) ? true : false;
// }

// let img1 = isLandScape(120, 100);
// console.log(img1);


// the code above is okay but is amateurish
// a better approach could be:

function isLandScape(width, height) {
    return (width > height)
}

let img2 = isLandScape(120, 100);
console.log(img2);


// 3 - The FizzBuzz Algorithm

/* We should implement a function that takes an input as a parameter
and must validate if that input is divisible by 3 or 5.
If the input is divisible by 3, should return the string Fizz,
If the input is divisible by 5, should return the string Buzz.
But, if the input is divisible by both, 3 and 5, should return FizzBuzz.
If we got an input that isn't divisible by neither, 3 or 5, should return the same input.
If the input is a string, should return the message: Is not a number. */


// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);


function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

    else if (input % 3 === 0 && input % 5 !== 0)
        return 'Fizz';

    else if (input % 5 === 0 && input % 3 !== 0)
        return 'Buzz';

    else if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';

    return input;

}

// 4 - Speed limit

/* We must implement a function that checks the speed limit of a car */

// Speed limit = 70
// For every 5 kms above the speed limit the user gain 1 point 5 -> 1 point
// for that, we can use Math.floor() method
// More than 12 points -> License suspended



function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPointsPermitted = 12;

    if (speed <= speedLimit || speed <= 74)
        return 'Ok';
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= maxPointsPermitted)
            return `License Suspended`
        return `Points: ${points}`

    }

    // if (speed < speedLimit + kmPerPoint) {
    //     return 'Ok';
    // }
    // const points = Math.floor((speed - speedLimit) / kmPerPoint);
    // if (points >= maxPointsPermitted)
    //     return `License Suspended`
    // else
    //     return `Points: ${points}`

}

let car = checkSpeed(70);
console.log(car);




