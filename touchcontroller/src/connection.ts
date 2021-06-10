import net from 'net';
import JsonSocket from 'json-socket';

const connect = () => {
  const port = 4501;
  const host = '127.0.0.1';
  const socket = new JsonSocket(new net.Socket());
  let socketActive = false;
  socket.connect(port, host);
  socket.on('connect', () => (socketActive = true));
  return {socket, socketActive};
}

export const connection = connect();
