var os = require("os");
var combine = require("stream-combiner");
var through = require("through");
var split = require("split");
var zlib = require("zlib");

module.exports = function () {
    var grouper;
    var current;

    function write (line) {
        var row;

        if (line.length === 0) {
            return;
        }

        row = JSON.parse(line);

        if (row.type === "genre") {
            if (current) {
                this.queue(JSON.stringify(current) + os.EOL);
            }

            current = {
                name: row.name,
                books: []
            };
        } else if (row.type === "book") {
            current.books.push(row.name);
        }
    }

    function end () {
        if (current) {
            this.queue(JSON.stringify(current) + os.EOL);
        }

        this.queue(null);
    }

    grouper = through(write, end);

    return combine(split(), grouper, zlib.createGzip());
};