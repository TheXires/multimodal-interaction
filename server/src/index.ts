import JsonSocket from 'json-socket';
import * as net from 'net';
import requestController from './controller/request.controller';
import { getCurrentVelocity } from './simulation';
import { Action } from './types/actions';

// setup socket server
const port = 4501;
export const server = net.createServer();
server.listen(port);
console.log(`listening at http://localhost:${port}`);
const clients: JsonSocket[] = [];

server.on('connection', (socket) => {
  const jsonSocket = new JsonSocket(socket);
  clients.push(jsonSocket);
  console.log('connection established \n active connections: ', clients.length);

  // send velocity for initial display
  sendMessage({ action: 'velocityChanged', velocity: getCurrentVelocity() });

  jsonSocket.on('message', (req) => {
    console.log('Incoming request: ', req);
    requestController.processRequest(req);
  });

  socket.on('end', () => {
    const index = clients.indexOf(jsonSocket);
    if (index !== -1) {
      clients.splice(index, 1);
      console.log('client disconnected. \n active connections: ', clients.length);
    }
  });
});

/**
 * send message to clients
 *
 * @param message JSON Object
 */
export const sendMessage = (message: Action): void => {
  clients.forEach((socket) => {
    console.log('message to send: ', JSON.stringify(message));
    socket.sendMessage(message, (error) => {
      if (error) {
        console.error(error.message);
      }
    });
  });
};
