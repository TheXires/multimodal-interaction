import React, { Suspense, useEffect } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/Sidebar';
import Controllersection from './components/controllersection/Controllersection';
import { sendMessageToServer } from './connection/connectToServer';
// import { jsonSocketPort, serverSocket } from './connection/server';

function loading() {
  return <div>Loading...</div>;
}

function App() {
  return (
    <div className="App">
      <Clock />
      <Sidebar />
      <Suspense
        fallback={loading}
      >
        <Controllersection />
      </Suspense>
    </div>
  );
}

export default App;
