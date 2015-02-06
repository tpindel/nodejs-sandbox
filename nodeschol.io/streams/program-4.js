var tr = require('through');

var st = tr(function write(data){
  var res = data.toString().toUpperCase();
  this.queue(res);

}, function end() {
  this.queue(null);
});

process.stdin.pipe(st).pipe(process.stdout);
