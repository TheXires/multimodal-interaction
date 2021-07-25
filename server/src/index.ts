import * as net from 'net';
import requestController from './controller/request.controller';

// setup json-socket server
const port = 4501;
export const server = net.createServer();
server.listen(port);
console.log(`listening at http://localhost:${port}`);
const clients = [];

server.on('connection', (socket) => {
  clients.push(socket);
  console.log('connection established \n active connections: ', clients.length);
  socket.on('data', (req) => {
    console.log(JSON.parse(req.toString()));
    requestController.processRequest(JSON.parse(req.toString()));
  });

  socket.on('end', () => {
    let index = clients.indexOf(socket);
    if (index !== -1) {
      clients.splice(index, 1);
      console.log('client disconnected. \n active connections: ', clients.length);
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
