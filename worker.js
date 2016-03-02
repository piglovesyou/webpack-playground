
// debugger;

const s = require('./module');

addEventListener('message', function(e) {
  console.log(s);
  postMessage({
    a: 'a',
    b: 'b'
  });
}, false);
