// Arrays Exercises

// Making an array from a given range

const numbers = arrayFromRange(-20, -10);
console.log(numbers);

function arrayFromRange(min, max) {
    const array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}


