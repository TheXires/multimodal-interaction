import React, { useEffect } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/Sidebar';
import Controllersection from './components/controllersection/Controllersection';
import { sendMessageToServer } from './connection/connectToServer';
import { jsonSocketPort, serverSocket } from './connection/server';

// start client server
serverSocket.listen(jsonSocketPort);

function App() {
  useEffect(() => {
    sendMessageToServer({ action: 'changeSpeed', amount: 14 });
    sendMessageToServer({ action: 'connectToMe' });
  }, []);

  return (
    <div className="App">
      <Clock />
      <Sidebar />
      <Controllersection />
    </div>
  );
}

export default App;
