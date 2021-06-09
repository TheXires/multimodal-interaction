import * as net from 'net';
import * as JsonSocket from 'json-socket';

const port = 4501;
const server = net.createServer();
server.listen(port);
console.log(`Starting on port: ${port}`);

server.on('connection', (socket) => {
  console.log('Connection recieved');
  socket = new JsonSocket(socket);
  socket.on('message', (message) => {
    console.log(message);
  });
});

const changeSpeed = (speed: number): void => {
  console.log('changeSpeed: ' + speed);
};

const setSpeed = (speed: number): void => {
  console.log('setSpeed: ' + speed);
};

const stop = (): void => {
  console.log('stop');
};

const emergencyStop = (): void => {
  console.log('emergencyStop');
};

const changeDirection = (direction: string): void => {
  console.log('changeDirection: ' + direction);
};

const changeLane = (direction: string): void => {
  console.log('changeLane: ' + direction);
};
