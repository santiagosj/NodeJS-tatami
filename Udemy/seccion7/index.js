const Emitter = require('./emitter');

const emitter = new Emitter();

emitter.on("save", () => {
    console.log("On save activado 1");
});

emitter.on("save", () => {
    console.log("On save activado 2");
});

emitter.emit("save");

