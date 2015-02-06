var sockets = require('websocket-stream');
var s = sockets("ws://localhost:8000");

s.end("hello\n");
