var tr = require('through');
var split = require('split');

var counter = 1;
process.stdin
  .pipe(split())
  .pipe(tr(function(data){
    var res;
    if (counter % 2 == 0) {
      res = data.toString().toUpperCase();
    } else {
      res = data.toString().toLowerCase();
    }
    this.queue(res + '\n');
    counter ++;
  }))
  .pipe(process.stdout);
