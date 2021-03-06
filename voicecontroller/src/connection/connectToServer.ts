import JsonSocket from 'json-socket';
import net from 'net';
import { Action } from '../types/actions';

// socket setup
const port = 4501;
const host = '127.0.0.1';
let socket = new JsonSocket(new net.Socket());
let socketActive = false;

/**
 * connect to server
 */
const connectToServer = (): void => {
  socket.connect(port, host);
};

/**
 * set interval to try to connect to server for independent boot order
 */
const tryToConnect = setInterval(() => {
  if (!socketActive) {
    connectToServer();
  } else {
    clearInterval(tryToConnect);
  }
}, 3000);

// listens to events send from server
socket.on('connect', () => {
  socketActive = true;
  console.log('connected');
});

// handles server error messages
socket.on('error', (error: any) => {
  if (error.code === 'ECONNREFUSED') {
    console.log('trying to connect...');
  } else {
    console.error(error.message);
    clearInterval(tryToConnect);
  }
});

// when losing connection to server try to reconnect
socket.on('end', () => {
  console.log('try to reconnect...');
  socketActive = false;
  const tryToReconnect = setInterval(() => {
    if (!socketActive) {
      connectToServer();
    } else {
      clearInterval(tryToReconnect);
    }
  }, 3000);
});

/**
 * send message to Server
 *
 * @param message JSON Object
 */
export const sendMessageToServer = (message: Action): void => {
  if (socketActive) {
    socket.sendMessage(message, (error) => {
      if (error) {
        console.error(error.message);
      }
    });
  }
};
