var duplex = require("duplexer");
var through = require("through");

module.exports = function (counter) {
    var countries = {};
    var input;

    function write(row) {
        countries[row.country] = (countries[row.country] || 0) + 1;
    }

    function end() {
        counter.setCounts(countries);
    }

    input = through(write, end);

    return duplex(input, counter);
};