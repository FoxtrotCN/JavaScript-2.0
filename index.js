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

// Count Occurrences

const numberS = [1, 2, 3, 4, 1];

const search = countOccurrences(numberS, 1);

console.log(search);

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;

    // With the reduce() method we can achieve the same result with
    // less code:

    console.log(numberS);
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}


// Get max

const numberSS = [1, 2, 3, 4, 5, 100, 1000];
const max = getMax(numberSS);
console.log(max);


function getMax(array) {
    if (array.length === 0)
        return undefined;
    //
    // let max = array[0];
    // for (let i = 0; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

    // With reduce()

    return array.reduce((accumulator, current) =>
        (current > accumulator) ? current : accumulator);
}

// Get Movies

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title


const titles = movies
                .filter(m => m.year === 2018 && m.rating >= 4)
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .map(m => m.title);

console.log(titles);