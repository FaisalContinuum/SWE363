// Main program (app.js)

import {EventEmitter} from 'events';

class CustomEventEmitter extends EventEmitter {}

const eventEmitter = new CustomEventEmitter();

// Register event listeners
eventEmitter.on('userLoggedIn', (username,number) => {
    console.log(`User ${username} logged in.`);
    setTimeout(() => {
        eventEmitter.emit('userLoggedOut', username, number)
    }, 100 + Math.random() * 1900);
});

eventEmitter.on('userLoggedOut', (username,number) => {
    console.log(`User ${username} logged out.`);
    setTimeout(() => {
        eventEmitter.emit('userLoggedIn', username, number)
    }, 100 + Math.random() * 1900);
});

eventEmitter.emit('userLoggedIn', 'Bob', 1);
eventEmitter.emit('userLoggedIn', 'Alice', 1);
eventEmitter.emit('userLoggedIn', 'Wael Sulais', 1);