'use strict';

var worker = new Worker('/worker.entry.js');

const s = require('./module');

worker.addEventListener('message', function(e) {
  console.log(s);
  console.log('Worker said: ', JSON.stringify(e.data));
}, false);

document.addEventListener('click', e => {
  worker.postMessage('Hello World'); // Send data to our worker.
})

// console.log(baaa);

