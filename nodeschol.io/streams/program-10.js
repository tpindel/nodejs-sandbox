var trumpet = require('trumpet');
var through = require('through');

var htmlStream = trumpet();
var elements;

var tr = through(function(data) {
  this.queue(data.toString().toUpperCase());
});

elements = htmlStream.select(".loud").createStream()
elements.pipe(tr).pipe(elements);

process.stdin.pipe(htmlStream).pipe(process.stdout);
