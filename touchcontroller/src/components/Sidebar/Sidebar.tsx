import React from 'react';
import Music from './Music/Music';
import Map from './Map/Map';
import './Sidebar.css';
import Navigation from './Navigation/Navigation';

function Sidebar() {
  return (
    <div className="sidebar">
      <Navigation />
      <Map />
      <Music />
    </div>
  );
}

export default Sidebar;
