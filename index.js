// Arrays


// Joining Elements

const numbers = [1, 2, 3, 1, 2, 5, 6, 4];
const joined = numbers.join(',');
console.log(joined);


// Assume you are building an url slug

const message = 'This is my first Message';
const messageParts = message.split(' ');
console.log(messageParts);

const combinedMessage = messageParts.join('-');
console.log(combinedMessage);

// Sorting an array
numbers.sort();
console.log(numbers);

// Reversing an array
numbers.reverse();
console.log(numbers);