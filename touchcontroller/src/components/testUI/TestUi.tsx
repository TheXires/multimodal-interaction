import React, { useState } from 'react';
import './TestUI.css';
import carService from '../../services/car.service';

enum eDirection {
  rechts,
  links
}

function TestUi() {
  const [speed, setSpeed] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  return (
    <div className="testUI">
      <div>
        <input
          value={speed}
          type="number"
          id="speedInput"
          onChange={(event) => {
            setSpeed(Number(event.target.value));
          }}
        />
        <input
          value={direction}
          type="text"
          id="directionInput"
          onChange={(event) => {
            setDirection(Number(event.target.value));
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            carService.changeSpeed(speed || 5);
          }}
        >
          changeSpeed
        </button>
        <button
          onClick={() => {
            carService.setSpeed(speed || 6);
          }}
        >
          setSpeed
        </button>
        <button
          onClick={() => {
            carService.stop();
          }}
        >
          stop
        </button>
        <button
          onClick={() => {
            carService.emergencyStop();
          }}
        >
          emergencyStop
        </button>
        <button
          onClick={() => {
            carService.changeDirection(eDirection[direction]);
          }}
        >
          changeDirection
        </button>
        <button
          onClick={() => {
            carService.changeLane(eDirection[direction]);
          }}
        >
          changeLane
        </button>
      </div>
    </div>
  );
}

export default TestUi;
