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

