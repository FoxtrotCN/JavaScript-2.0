// Arrays

const numbers = [3, 4];

// Adding elements to an array
// to the End, Beginning or Middle

console.log(numbers);

// End
numbers.push(5, 6)
console.log(numbers);

//Beginning
numbers.unshift(9, 0);
console.log(numbers);

//Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);


// Finding elements in an array

// We got 2 methods, indexOf() and lastIndexOf()

console.log(numbers.indexOf(2)); // Showing the first occurrence of an element in an array
                                // if no elements, it returns -1

console.log(numbers.lastIndexOf(3)); // Showing the last occurrence of an element in an array
                                    // if no elements, it returns -1
console.log(numbers.includes(0)); // Returns true or false if the given index exist.


// Finding reference types (objects)

const courses = [
    {id: 1, name: 'b'},
    {id: 2, name: 'c'},
];

// We can use the find or findIndex() method

const course1 = courses.find(function (course) {
    return course.id === 1; // or
    // return course.name === 'b';
});

console.log(course1);

// using the findIndex works in the same way as the methods to find elements in an arrya
// with primitive types.

const course = courses.findIndex(function (course) {
    return course.name === 'b';
});

console.log(course);

// Arrow Functions ES6

const courseArrowFunction = courses.find(course => course.name === 'b'); // arrow function () => {}
console.log(courseArrowFunction);

// Removing elements from an array


const letters = ['a', 'b', 'c', 'z', 'y', 'v'];

// We can remove elements of an array as well as we add
console.log(letters);
// End pop()
letters.pop();
console.log(letters);

// Beginning
letters.shift();
console.log(letters);

// Middle
letters.splice(0, 2);
console.log(letters);

// Combining arrays with spread operator

const first = [1, 2, 3, 4];
const second = [5, 6, 7];

const combined = [...first, ...second];
console.log(combined);


// Iterating an Array

const numbersS = [1, 2, 3, 4, 5];

for (let number of numbersS)
    console.log(number);

numbersS.forEach(number => console.log(number)); // This can take the index

