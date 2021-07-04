import React, { Suspense, useEffect } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/Sidebar';
import Controllersection from './components/controllersection/Controllersection';
import { sendMessageToServer } from './connection/connectToServer';
// import { jsonSocketPort, serverSocket } from './connection/server';

function App() {
  return (
    <div className="App">
      <Clock />
      <Sidebar />
      <Controllersection />
    </div>
  );
}

export default App;
