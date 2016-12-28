'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const sockets = new Set();

app.get('/start', function (req, res) {
    sockets.forEach((socket) => socket.emit('message', 'start now'));
    res.end();
})

app.use('/node_modules', express.static('node_modules'));

io.on('connection', function (socket) {
    console.log('a user connected');
    sockets.add(socket);
    socket.on('disconnect', function () {
        console.log('user disconnected');
        sockets.delete(socket);
    });
});

http.listen(3000, function () {
    console.log('listening on localhost:3000');
});
