const request = require('request');

function check(url, callback) {

    request(url, function (error, response) {

        if (error) return callback(error);
        if (response && response.statusCode === 200) return callback(true);
        else return callback(false);
    });
}

exports.check = check;