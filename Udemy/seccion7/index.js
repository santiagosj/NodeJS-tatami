const EventEmitter = require('events');
const { SAVE } = require('./event-emitter.js');
// const Emitter = require('./emitter');

// const emitter = new Emitter();

const emiter = new EventEmitter();

emitter.on(SAVE, () => {
    console.log("On save activado 1");
});

emitter.on(SAVE, () => {
    console.log("On save activado 2");
});

emitter.emit(SAVE);

