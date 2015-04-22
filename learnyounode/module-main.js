filterFiles = require('./module-filtering.js');

var dirName = process.argv[2];
var extension = process.argv[3];

filterFiles(dirName, extension, function (err, files) {
    if (err) {
        return console.error('There was an error:', err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});
