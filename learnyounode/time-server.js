var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    var currentTimeStr = getCurrentTimeStr();
    socket.end(currentTimeStr + '\n');
});
server.listen(port);

function getCurrentTimeStr() {
    var now = new Date();

    var year = now.getFullYear();
    var month = zeroPad(now.getMonth() + 1);
    var day = zeroPad(now.getDate());
    var hour = zeroPad(now.getHours());
    var min = zeroPad(now.getMinutes());

    return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
}

function zeroPad(n) {
    if (n < 10) {
        return '0' + n.toString();
    } else {
        return n.toString();
    }
}