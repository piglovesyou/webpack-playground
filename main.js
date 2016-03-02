'use strict';

require('./main.css');
const worker = new Worker('/worker.entry.js');
const s = require('./module');

worker.addEventListener('message', function(e) {
  console.log(s);
  console.log('Worker said: ', JSON.stringify(e.data));
}, false);

document.querySelector('#run-worker').addEventListener('click', function(e) {
  worker.postMessage('Hello World'); // Send data to our worker.
})

document.querySelector('#load-chunk').addEventListener('click', function(e) {
  require.ensure(['./chunk'], function(require) {
    document.querySelector('#log').textContent = require('./chunk') + '\n' + document.querySelector('#log').textContent;
  });
})

// console.log(baaa);

