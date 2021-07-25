import React, { Suspense, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock/clock';
import Sidebar from './components/Sidebar/Sidebar';
import Controllersection from './components/Controllersection/Controllersection';
import { sendMessage } from './connection/connectToServer';
// import { jsonSocketPort, serverSocket } from './connection/server';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Controllersection />
      <Clock />
    </div>
  );
}

export default App;
