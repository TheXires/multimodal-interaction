import * as net from 'net';
import * as JsonSocket from 'json-socket';
import {
  changeSpeed,
  setSpeed,
  stop,
  emergencyStop,
  changeDirection,
  changeLane,
} from './actionhandler';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

// setup socket.io
const socketioPost = 4503;
const httpServer = createServer();
const io = new Server(httpServer);

io.on('connection', (socket: Socket) => {
  console.log('socketio connection established');
  socket.on('testcall', (req) => {
    console.log(req);
  });
});

httpServer.listen(socketioPost, () => {
  console.log(`Socket.io listening at http://localhost: ${socketioPost}`);
});

// setup json-socket
const jsonSocketPort = 4501;
export const jsonSocket = net.createServer();
jsonSocket.listen(jsonSocketPort);
console.log(`json-token listening at http://localhost: ${jsonSocketPort}`);

jsonSocket.on('connection', (socket) => {
  console.log('json-token connection established');
  socket = new JsonSocket(socket);
  socket.on('message', (req) => {
    switch (req.action) {
      case 'changeSpeed':
        changeSpeed(req.amount);
        break;
      case 'setSpeed':
        setSpeed(req.speed);
        break;
      case 'stop':
        stop();
        break;
      case 'emergencyStop':
        emergencyStop();
        break;
      case 'changeDirection':
        changeDirection(req.direction);
        break;
      case 'changeLane':
        changeLane(req.direction);
        break;
      default:
        console.log('invalid command');
    }
  });
});
