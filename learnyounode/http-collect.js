bl = require('bl');
http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});