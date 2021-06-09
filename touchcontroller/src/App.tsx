import React from 'react';
import './App.css';
import Clock from "./components/clock/clock";
import Sidebar from './components/sidebar/sidebar';
import Controllersection from './components/controllersection/controllersection';
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
