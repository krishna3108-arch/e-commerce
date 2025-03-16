const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('update-price', (newPrice) => {
    console.log(`Price updated to: ${newPrice}`);
    io.emit('price-update', newPrice);
  });

  socket.on('update-order', (order) => {
    console.log(`Order updated:`, order);
    io.emit('order-update', order);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
