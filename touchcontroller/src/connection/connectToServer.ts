import JsonSocket from 'json-socket';
import net from 'net';
import {
  updateConnectionLostIndicator,
  updateMicIndicator,
} from '../components/Controllersection/MicIndicator';
import { updateVelocityIndicator } from '../components/Controllersection/VelocityIndicator';
import { Action } from '../types/actions';
import { MicIndicatorState } from '../types/micIndicatorState';

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
  updateConnectionLostIndicator(false);
  socketActive = true;
  console.log('connected');
});

socket.on('message', (state) => {
  updateConnectionLostIndicator(false);
  // console.log('Pure Data: ', JSON.parse(data.toString()));
  switch (state.action) {
    case 'listening':
      console.log('listening');
      updateMicIndicator(MicIndicatorState.ON);
      break;
    case 'processing':
      console.log('processing');
      updateMicIndicator(MicIndicatorState.PROCESSING);
      break;
    case 'finished':
      console.log('finished');
      updateMicIndicator(MicIndicatorState.OFF);
      break;
    case 'velocityChanged':
      console.log('velocityChanged: ', state.velocity);
      updateVelocityIndicator(state.velocity);
      break;
    default:
      break;
  }
});

// handles server error messages
socket.on('error', (error: any) => {
  updateConnectionLostIndicator(true);
  if (error.code === 'ECONNREFUSED') {
    console.log('trying to connect...');
  } else {
    console.error(error.message);
    clearInterval(tryToConnect);
  }
});

// when losing connection to server try to reconnect
socket.on('end', () => {
  updateConnectionLostIndicator(true);
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
    console.log('message: ', message);
    socket.sendMessage(message, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};
