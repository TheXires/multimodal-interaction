import React, { useEffect, useState, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';
import { IndicatorState } from '../../../types/indicatorState';
import * as laneChangeLeft from '../../../assets/laneChangeLeft.png';
import * as laneChangeRight from '../../../assets/laneChangeRight.png';
import * as turnRight from '../../../assets/turnRight.png';
import * as turnLeft from '../../../assets/turnLeft.png';
import * as forwards from '../../../assets/forwards.png';
import * as backwards from '../../../assets/backwards.png';

/**
 * Current state of the indicator shown in the scene. Updates dynamically with the currently chosen action.
 * Gets hydrated by the service to gain access from outside this module.
 */
export let updateIndicator: (state: IndicatorState) => void;

/**
 * The own car placed in the middle of the scene
 */
const Indicator = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const laneChangeLeftTexture = useLoader(TextureLoader, laneChangeLeft.default);
  const laneChangeRightTexture = useLoader(TextureLoader, laneChangeRight.default);
  const turnRightTexture = useLoader(TextureLoader, turnRight.default);
  const turnLeftTexture = useLoader(TextureLoader, turnLeft.default);
  const forwardsTexture = useLoader(TextureLoader, forwards.default);
  const backwardsTexture = useLoader(TextureLoader, backwards.default);
  const ref = useRef();

  /**
   * Update the indicator on rerender.
   */
  useEffect(() => {
    updateIndicator = (state) => {
      if (!ref.current) {
        setShow(false);
        return;
      }
      setShow(true);
      if (state == IndicatorState.LANE_CHANGE_LEFT) {
        ref.current.map = laneChangeLeftTexture;
      } else if (state == IndicatorState.LANE_CHANGE_RIGHT) {
        ref.current.map = laneChangeRightTexture;
      } else if (state == IndicatorState.TURN_LEFT) {
        ref.current.map = turnLeftTexture;
      } else if (state == IndicatorState.TURN_RIGHT) {
        ref.current.map = turnRightTexture;
      } else if (state == IndicatorState.INCREASE_SPEED) {
        ref.current.map = forwardsTexture;
      } else if (state == IndicatorState.DECREASE_SPEED) {
        ref.current.map = backwardsTexture;
      } else if (state == IndicatorState.NONE) {
        setShow(false);
      }
    };
  });

  return (
    <mesh position={[0, 0.002, 6]} rotation={[-Math.PI * 0.5, 0, Math.PI]}>
      <planeGeometry args={[6, 7]} />
      <meshBasicMaterial
        ref={ref}
        attach="material"
        transparent
        map={laneChangeLeftTexture}
        opacity={show ? 1 : 0}
      />
    </mesh>
  );
};

export default Indicator;
