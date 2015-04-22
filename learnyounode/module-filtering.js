fs = require('fs');
path = require('path');

function filterFiles(dirName, extension, callback) {
    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err, []);
        }

        var filteredFiles = files.filter(function (file) {
            return path.extname(file) == '.' + extension
        });

        callback(null, filteredFiles);
    });
}

module.exports = filterFiles;