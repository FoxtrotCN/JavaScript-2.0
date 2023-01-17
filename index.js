// Objects

/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
}; */

// Factory Function

// This is another way to create multiple objects from the same
// We don't want to repeat multiples lines of code
// If we got the same code, DRY principle.

// We can create a function that creates an object

function createCircle (radius) {
    return {
        radius,
        draw() {
            console.log('Draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


// Constructor Function
// This convention use the Pascal notation

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

const circle3 = new Circle(2);


// The dynamic nature of objects

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('Draw');
//     }
// };

// circle.color = 'Yellow';
// circle.draw = function () {};

// We can even delete properties

// delete circle.color;
//
// console.log(circle);


// Iterating the properties of an object with for...in

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

// With for...of we can iterate over the keys of an object

for (let key of Object.keys(circle)) {
    console.log(key);
}

// We can see the keys and its values as an array

for (let entry of Object.entries(circle)) {
    console.log(entry);
}


// Cloning an object (OLD WAY)

const anotherCircle = {};

for (let key in circle) {
    anotherCircle[key] = circle[key];
}

console.log(anotherCircle);

// Not so older

/* const another = Object.assign({
    color: 'Blue'
}, circle);

console.log(another); */

// Moder way (spread operator ...)

const another = {...circle};
console.log(another);

// Exercises

// 1 - Creates an object Address that has:
// street
// city
// zipCode

// and then make a function showAddress that takes address as a parameter
// to show all the address

const address = {
    street: '2nd street',
    city: 'London',
    zipCode: 11507
};

function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

showAddress(address);


// 2 - Factory and Constructor Function

// This time we must implement these kind of functions to create a new object

// Factory

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address1 = createAddress('2nd Street', 'London', 11507);
console.log(address1);

for (let key in address1) {
    console.log(key, address1[key]);
}

// Constructor

function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('2nd street', 'London', 11507);
console.log(address2);

for (let key in address2) {
    console.log(key, address2[key]);
}

// 3 - Object Equality

// This time we must implement 2 functions that evaluates the quality between 2 objects
// The first one if for the equality of properties or Key
// The second one is for the equality between the objects (which is always false)

const address3 = new Address('2nd street', 'London', 11507);
// address3.country = 'Dominican';
// console.log(address2);

const address4 = new Address('2nd street', 'London', 11507);
// console.log(address2);

function areEqual(address3, address4) {
    let keyAddress3 = {};
    let keyAddress4 = {};

    for (let key in address3) {
        keyAddress3 = key;
    }

    for (let key in address4) {
        keyAddress4 = key;
    }

    console.log((keyAddress3 === keyAddress4));


}

areEqual(address3, address4);

function areSame(address3, address4) {
    console.log((address3 === address4));
}

areSame(address3, address4);

