import * as net from 'net';
import requestController from './controller/request.controller';

// setup json-socket server
const port = 4501;
export const server = net.createServer();
server.listen(port);
console.log(`listening at http://localhost:${port}`);
const clients = [];

server.on('connection', (socket) => {
  console.log('connection established');
  clients.push(socket);
  socket.on('data', (req) => {
    console.log(JSON.parse(req.toString()));
    requestController.processRequest(JSON.parse(req.toString()));
    if (JSON.parse(req.toString()).action == 'changeSpeed') {
      socket.write(JSON.stringify({ action: 'test2' }), (error) => {
        console.log(error);
      });
    }
  });

  socket.on('end', () => {
    console.log('client disconnected')
    let index = clients.indexOf(socket);
    if (index !== -1) {
      console.log(clients.length);
      clients.splice(index, 1);
      console.log(clients.length);
    }
  });
});

export const sendMessage = (message: any): void => {
  clients.forEach((socket) => {
    socket.write(JSON.stringify(message), (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  })
};
