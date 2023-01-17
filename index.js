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



