fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', function (err, data) {
    var lines = data.split('\n');
    var numberOfNewLines = lines.length - 1;
    console.log(numberOfNewLines);
});
