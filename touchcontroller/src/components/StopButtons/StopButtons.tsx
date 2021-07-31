import React, { useState } from 'react';
import './StopButtons.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { GiParkBench } from 'react-icons/gi';
import { CgSearchLoading } from 'react-icons/cg';
import { emergencyStop, stop } from '../../services/car.service';

const StopButtons = () => {
  const [isPause, setIsPause] = useState(false);

  return (
    <div className="stopButton">
      <div
        className="stopButton__box"
        onClick={() => {
          if (!isPause) {
            stop();
          }
          setIsPause(!isPause);
        }}
      >
        <div className="stopButton__boxButton green" />
        {isPause ? (
          <CgSearchLoading className="stopButton__icon" />
        ) : (
          <GiParkBench className="stopButton__icon" />
        )}
      </div>
      <div className="stopButton__box" onClick={() => emergencyStop()}>
        <div className="stopButton__boxButton red" />
        <FaExclamationTriangle className="stopButton__icon" />
      </div>
    </div>
  );
};

export default StopButtons;
