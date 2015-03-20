var spawn = require("child_process").spawn;
var duplex = require("duplexer");

module.exports = function (command, args) {
    var spawned = spawn(command, args);

    return duplex(spawned.stdin, spawned.stdout);
};