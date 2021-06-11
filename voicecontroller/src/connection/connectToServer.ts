import net from 'net';
import JsonSocket from 'json-socket';
// socket setup
const port = 4501;
const host = '127.0.0.1';
const socket = new JsonSocket(new net.Socket());
let socketActive = false;
socket.connect(port, host);
socket.on('connect', () => {
  socketActive = true;
  console.log('connect');
  socket.on('test', () => {
    console.log('test');
  });
});

export const sendMessageToServer = (message: any) => {
  if (socketActive) {
    socket.sendMessage(message, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
}
