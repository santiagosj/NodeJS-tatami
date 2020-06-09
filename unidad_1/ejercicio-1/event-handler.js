const events = require('events');

const eventEmitter = events.EventEmitter;

var ee = new eventEmitter();

ee.on('datos', (fecha)=>{
  console.log(fecha);
});

setInterval(()=>{
  ee.emit('datos', Date.now())
}, 500);
