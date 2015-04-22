var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
server.listen(port);



