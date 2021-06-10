import React, { useEffect } from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/Sidebar';
import Controllersection from './components/controllersection/Controllersection';
import { sendMessage } from './services/connection.service';

function App() {
  useEffect(() => {
    sendMessage({ action: 'changeSpeed', amount: 14 });
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
