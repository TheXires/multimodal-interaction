import React, { useEffect, useState } from 'react';
import { MicIndicatorState } from '../../types/micIndicatorState';
import './MicIndicator.css';

export let updateMicIndicator: (state: MicIndicatorState) => void;

const MicIndicator = (): JSX.Element => {
  const [indicator, setIndicator] = useState(MicIndicatorState.OFF);

  useEffect(() => {
    updateMicIndicator = setIndicator;
  }, []);

  return <div className={'indicator ' + indicator}></div>;
};

export default MicIndicator;
