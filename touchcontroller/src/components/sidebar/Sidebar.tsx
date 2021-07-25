import React from 'react';
import Music from '../Music/Music';
import Map from '../Map/Map';
import './Sidebar.css';
import Navigation from '../Navigation/Navigation';
import Info from '../Info/Info';


function Sidebar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar__cardContainer">
        <Card>Hallo</Card>
        <Card>Hallo</Card>
        <Card>Hallo</Card>
        <Card>Hallo</Card>
      </div> */}
      <Navigation />
      <Map />
      <Info />
      <Music />
    </div>
  );
}

export default Sidebar;
