fs = require('fs');
path = require('path');

var dirName = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirName, function (err, files) {
    files.forEach(function (file) {
        if (path.extname(file) == '.' + extension) {
            console.log(file)
        }
    });
});
