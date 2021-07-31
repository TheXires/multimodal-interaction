import React from 'react';
import './App.css';
import Clock from './components/Clock/clock';
import Controllersection from './components/Controllersection/Controllersection';
import Sidebar from './components/Sidebar/Sidebar';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Sidebar />
      <Controllersection />
      <Clock />
    </div>
  );
};

export default App;
