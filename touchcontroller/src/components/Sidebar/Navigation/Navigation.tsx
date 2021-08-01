import React, { useEffect, useState } from 'react';
import './Navigation.css';

/**
 * navigation card for sidebar
 */
const Navigation = (): JSX.Element => {
  return (
    <div style={{ borderRadius: 25, backgroundColor: '#8FB0FF', padding: '1rem' }}>
      <div className="navigation__header">Fahrzeit</div>
      <div className="navigation__data">1 std 31 min</div>
      <div className="navigation__header">Strecke</div>
      <div className="navigation__data">108 KM</div>
      <div className="navigation__header">Ziel</div>
      <div className="navigation__data">Wanderweg Naturpark Melbtal</div>
    </div>
  );
};

export default Navigation;
