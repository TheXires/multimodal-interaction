import net from 'net';
import { updateMicIndicator } from '../components/Controllersection/MicIndicator';
import { updateVelocityIndicator } from '../components/Controllersection/VelocityIndicator';
import { Action } from '../types/actions';
import { MicIndicatorState } from '../types/micIndicatorState';

const port = 4501;
let socket = net.createConnection(port);
let socketActive = false;

/**
 * connect to server
 */
const connectToServer = () => {
  socket = socket.connect(port);
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

socket.on('data', (data) => {
  // updateMicIndicator(MicIndicatorState.PROCESSING)
  // updateVelocityIndicator(100);
  console.log(JSON.parse(data.toString()));
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
  console.log('Try to reconnect...');
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
export const sendMessage = (message: Action): void => {
  if (socketActive) {
    const json = JSON.stringify(message);
    console.log('json: ', json);
    socket.write(json, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};
