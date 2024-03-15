//The events module provides a way of working with events. It is a built-in module in Node.js.
// Using the events module, we can dipatch events, listen to events, and handle events.

const EventEmitter = require('events'); // Events modules returns a class claled EventEmitter
// The EventEmitter class is the core of the events module. It is an object that emits events and listens to them.

const emitter = new EventEmitter(); // Create an instance of the EventEmitter class

// Register a listener
emitter.on('messageLogged', function () {
    console.log("Listener called");
});


// Raise an event

emitter.emit('messageLogged'); // Emit an event called messageLogged


// Emitting an event with arguments

emitter.on('Url', function (arg) {
    console.log("Url called", arg);
});

emitter.emit('Url', { id: 1, url: 'http://abc' }); // Emit an event called messageLogged with an object as an argument



// Emitting an event with arrow function and template string

emitter.on('Url', (arg) => {
    console.log(`Url called ${arg.id} ${arg.url}`);
});

emitter.emit('Url', { id: 1, url: 'http://' }); // Emit an event called messageLogged with an object as an argument




