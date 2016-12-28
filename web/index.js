'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/node_modules', express.static('node_modules'));

io.on('connection', function (socket) {
    console.log('a user connected');
    function emit() {
        if (socket.connected) {
            socket.emit('message', 'start');
            console.log('message sent');
            setTimeout(emit, 2000);
        }
    }
    emit();
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on localhost:3000');
});
