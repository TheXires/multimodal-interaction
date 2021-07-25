import React from 'react';
import './Map.css';
import map_img from '../../../assets/map.png';

const Map = () => {
  return (
    <div
      className="map"
      style={{
        borderRadius: 25,
      }}
    >
      <img src={map_img} />
    </div>
  );
};

export default Map;
