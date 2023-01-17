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
