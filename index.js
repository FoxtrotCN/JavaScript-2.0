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


