var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(body) {
    var reversed = body.toString().split("").reverse().join("");
    console.log(reversed);  
  }));
