var http = require('http');
var tr = require('through');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(tr(function(data){
      this.queue(data.toString().toUpperCase());
    })).pipe(res);
  } else {
    res.end();
  }
});
server.listen(process.argv[2]);
