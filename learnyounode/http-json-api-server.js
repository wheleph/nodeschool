var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});

        var parsedUrl = url.parse(request.url, true);
        var isoDate = parsedUrl.query['iso'];
        var date = new Date(isoDate);
        var output;
        if (parsedUrl.pathname == '/api/parsetime') {
            output = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };

            response.end(JSON.stringify(output));
        } else if (parsedUrl.pathname == '/api/unixtime') {
            output = {
                unixtime: date.getTime()
            };

            response.end(JSON.stringify(output));
        }
    }
});
server.listen(port);
