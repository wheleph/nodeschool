fs = require('fs');

var fileName = process.argv[2];

var buffer = fs.readFileSync(fileName);
var content = buffer.toString();
var lines = content.split('\n');

var numberOfNewlines = lines.length - 1;

console.log(numberOfNewlines);