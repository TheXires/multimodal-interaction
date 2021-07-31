import React from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Controllersection from './components/Controllersection/Controllersection';
import Sidebar from './components/Sidebar/Sidebar';
import StopButtons from './components/StopButtons/StopButtons';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Sidebar />
      <Controllersection />
      <Clock />
      <StopButtons />
    </div>
  );
};

export default App;
