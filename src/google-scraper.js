const request = require('request');
const cheerio = require('cheerio');

function scrape(options, callback) {

    var host = options.host || 'www.google.com';
    var keyword = options.keyword;
    var results = options.results || 10;

    const selector = 'h3.r a';

    request('https://'+ host +'/search?q='+ keyword +'&num='+ results +'', function (error, response, html) {

        if (error) return callback(error);
        else {

            const $ = cheerio.load(html);

            $(selector).each(function (i, dom) {

                var parsed = $(dom).attr('href').match('(?=http|https).*(?=&sa)');
                var domain = parsed[0];

                return callback(domain);
            })
        }
    });
}

exports.scrape = scrape;