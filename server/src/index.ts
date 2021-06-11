import * as net from 'net';
import * as JsonSocket from 'json-socket';
import requestController from './controller/request.controller'

// setup json-socket
const jsonSocketPort = 4501;
export const jsonSocket = net.createServer();
jsonSocket.listen(jsonSocketPort);
console.log(`json-token listening at http://localhost: ${jsonSocketPort}`);

jsonSocket.on('connection', (socket) => {
  console.log('json-token connection established');
  socket = new JsonSocket(socket);
  socket.on('message', (req) => {
    requestController.processRequest(req);
  });
});
