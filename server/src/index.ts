import * as net from "net";
import * as JsonSocket from "json-socket";

const port = 4501;
const server = net.createServer();
server.listen(port);
console.log(`Starting on port: ${port}`);
server.on("connection", function (socket) {
  console.log("Connection recieved");
  socket = new JsonSocket(socket);
  socket.on("message", function (message) {
      console.log(message);
  });
});
