var net = require("net");

var server = net.createServer();

server.on("connection", function (socket) {
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    console.log("New client connection is made %s", remoteAddress);

    socket.on("data", function (d) {
        console.log("Data from %s: %s", remoteAddress, d);
        socket.write("Hello " + d);
    });

    socket.once("close", function () {
        console.log("Connection from %s closed", remoteAddress);
    });

    socket.on("error", function (err) {
        console.log("Connection %s error: %s", remoteAddress, err.message);
    });
});

server.listen(80, function() {
    console.log("Server listening to %j", server.address());
})
