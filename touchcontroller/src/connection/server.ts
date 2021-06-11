import net from 'net';
import JsonSocket from 'json-socket';

export const jsonSocketPort = 4502;
export const serverSocket = net.createServer();
export let listening = '';

serverSocket.on('connection', (socket) => {
  console.log('json-token connection established');
  socket = new JsonSocket(socket);
  socket.on('message', (req) => {
    switch (req.action) {
      case 'listening':
        listening = 'listening';
        console.log('changed to ', listening);
        break;
      case 'processing':
        listening = 'processing';
        console.log('changed to ', listening);
        break;
      case 'finished':
        listening = 'finished';
        console.log('changed to ', listening);
        break;
      default:
        break;
    }
  });
});


