// Primitive / Value Types
/*
* Strings
* Numbers
* Booleans
* Undefined
* Null
 */

let name = 'Fernan'; //String Literal
let age = 30; //Number Literal
let isApproved = true; // Boolean Literal
let firstName; // By default is undefined
let selectedColor = null; // We use it in situations we want to clear the value of a variable


// Reference Type (OBJECTS)

let person = {
    name: 'Fernan',
    age: 22
};

// Dot notation to access the elements
person.name = 'John';
person.age = 25;

// Bracket notation
person['name'] = 'Mary';

console.log(person);

// Dynamic way

let userSelection = 'name';

person[userSelection] = 'Peter';
console.log(person);