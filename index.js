// Arrays Exercises

// Making an array from a given range

// const numbers = arrayFromRange(-20, -10);
// console.log(numbers);
//
// function arrayFromRange(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }

// Implementing the includes method without implementing it
// let numbers2 = [1, 2, 3]
//
// const array = includes(numbers2, 3);
//
// console.log(array);
//
// function includes(array, searchElement) {
//
//     for (let element of array)
//         if (element === searchElement)
//             return true;
//     return false;
//
// }

// const numbers3 = [1, 2, 3, 4, 5];
// const excluded = except(numbers3, [1]);
// console.log(excluded);
//
//
// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;
// }


// Moving an element

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid Offset');
        return;
    }

    const output = [...numbers];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}