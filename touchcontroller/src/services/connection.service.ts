import net from 'net';
import JsonSocket from 'json-socket';

const port = 4501;
const host = '127.0.0.1';
let socketActive = false;
const socket = new JsonSocket(new net.Socket());
socket.connect(port, host);
socket.on('connect', () => (socketActive = true));

export const sendMessage = (message: any) => {
  if (socketActive) {
    socket.sendMessage(message, (error) => {
      console.error(error);
    });
  }
};
