bl = require('bl');
http = require('http');

var urls = process.argv.slice(2);
var output = [];
var numberOfResponses = 0;

urls.forEach(function (item, index) {
    http.get(item, function (response) {
        response.pipe(bl(function (err, data) {
            output[index] = data.toString();
            numberOfResponses++;
            if (numberOfResponses == urls.length) {
                output.forEach(function(o) {
                    console.log(o);
                })
            }
        }))
    });
});
