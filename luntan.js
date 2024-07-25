const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('新用户连接');

    socket.on('message', (content) => {
        // 广播消息给所有连接的客户端
        io.emit('message', content);
    });

    socket.on('disconnect', () => {
        console.log('用户断开连接');
    });
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});