import * as net from 'net';
import * as JsonSocket from 'json-socket';

// setup json-socket client
export const clientPort = 4502;
export const host = '127.0.0.1';
let socketActive = false;
export const clientSocket = new JsonSocket(new net.Socket());
clientSocket.on('connect', () => (socketActive = true));

export const sendMessageToUI = (message: any): void => {
  if (socketActive) {
    clientSocket.sendMessage(message, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};
