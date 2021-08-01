import React, { useEffect, useState } from 'react';
import { MicIndicatorState } from '../../types/micIndicatorState';
import { VscDebugDisconnect } from 'react-icons/vsc';
import './MicIndicator.css';

export let updateMicIndicator: (state: MicIndicatorState) => void;
export let updateConnectionLostIndicator: (state: boolean) => void;

const MicIndicator = (): JSX.Element => {
  const [indicator, setIndicator] = useState(MicIndicatorState.OFF);
  const [connectionLost, setconnectionLost] = useState(false);

  useEffect(() => {
    updateMicIndicator = setIndicator;
    updateConnectionLostIndicator = setconnectionLost;
  }, []);

  return !connectionLost ? (
    <div className={'indicator ' + indicator}></div>
  ) : (
    <VscDebugDisconnect className="indicator connectionLost" />
  );
};

export default MicIndicator;
