import net from 'net';
import JsonSocket from 'json-socket';

const port = 4501;
const host = '127.0.0.1';
let socketActive = false;
export const clientSocket = new JsonSocket(new net.Socket());
clientSocket.connect(port, host);
clientSocket.on('connect', () => socketActive = true);

export const sendMessageToServer = (message: any) => {
  if (socketActive) {
    clientSocket.sendMessage(message, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};
