const url = require('url');

const scraper = require('./src/google-scraper');
const checker = require('./src/wordpress-checker');

function collect(options, callback) {

    scraper.scrape(options, function (link) {

        var host = url.parse(link).host;
        var domain = host.includes('www.') ? host : 'www.' + host;
        var wordpress = url.resolve(link, 'wp-login.php');

        checker.check(wordpress, function (isWordPress) {

            return callback({
                domain: domain,
                isWordPress: isWordPress
            });
        });
    });
}

module.exports.collect = collect;


