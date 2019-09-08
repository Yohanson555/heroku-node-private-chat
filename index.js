const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public_html'));

io.on('connection', (socket) => {
    console.log("user connected");

    socket.on('chat message', (msg) => {
        console.log('Received message - ' + msg);

        socket.emit('ccc', 'chat mesage received');
    })

    socket.on('disconnect', () => {
        socket.disconnect();

        console.log('User disconnected');
    });

    socket.emit('test message', 'hello bro');
});

http.listen(process.env.PORT, (a,b,c) => {
    console.log('listening');
    console.log(a, b, c);
}); 
