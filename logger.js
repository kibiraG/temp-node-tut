console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message) {
    //send an HTTP rewquest
    console.log(message);
}

module.exports.log = log;