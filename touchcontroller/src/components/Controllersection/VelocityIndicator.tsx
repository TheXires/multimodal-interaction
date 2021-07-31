import React, { useEffect, useState } from 'react';
import './VelocityIndicator.css';

export let updateVelocityIndicator: (state: number) => void;

const VelocityIndicator = (): JSX.Element => {
  const [velo, setVelo] = useState(0);

  useEffect(() => {
    updateVelocityIndicator = setVelo;
  }, []);

  return <div className={'velocityIndicator'}>{ velo } km/h</div>;
};

export default VelocityIndicator;
