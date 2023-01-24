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

// Implementing the includes method without implementing it
let numbers2 = [1, 2, 3]

const array = includes(numbers2, 3);

console.log(array);

function includes(array, searchElement) {

    for (let element of array)
        if (element === searchElement)
            return true;
    return false;

}
