// Function Declarations

// function greet(firstName = 'John', lastName = 'Doe') {
//     if(typeof firstName === 'undefined'){
//         firstName = 'John';
//     } if (typeof lastName ==='undefined') {
//         lastName = 'Doe';
//     }
//     console.log('Hello');
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());


// Function Experession
// const square = function(x = 100) {
//     return x * x;
// }

// console.log(square());

// Immediately invokable function expression - IIFE's
// (function() {
//     console.log('IIFE Ran...');
// })();

// (function(name) {
//     console.log(name)
// })('Bob');

// Property Methods
const todo = {
    add: function() {
        console.log('Add todo...')
    },
    edit: function() {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete Todo...');
}

todo.add();
todo.edit(100);
todo.delete();