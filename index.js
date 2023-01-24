// Arrays


// Testing the elements in an array

const numbers = [1, 2, 3, 1, 2, 5, 6, 4, -10];

// every() or some()

const allPositive = numbers.every(value => {
    return value >= 0;
});

const atLeastOnePositive = numbers.some(value => {
    return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

// Filtering the elements in an array filter()

const filtered = numbers.filter(value => {
    return value >= 0;
});

console.log(filtered);

// Mapping an array

const items = numbers.map(n => {
    return {value: n};
});

console.log(items);