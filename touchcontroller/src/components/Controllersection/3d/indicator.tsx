import React, { useEffect, useState } from 'react';
import * as laneChangeLeft from '../../../assets/laneChangeLeft.png';
import * as laneChangeRight from '../../../assets/laneChangeRight.png';
import * as turnRight from '../../../assets/turnRight.png';
import * as turnLeft from '../../../assets/turnLeft.png';
import * as forwards from '../../../assets/forwards.png';
import * as backwards from '../../../assets/backwards.png';
import { useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';
import { useRef } from 'react';

export enum IndicatorState {
  LANE_CHANGE_LEFT,
  LANE_CHANGE_RIGHT,
  TURN_LEFT,
  TURN_RIGHT,
  INCREASE_SPEED,
  DECREASE_SPEED,
  NONE,
}

export let updateIndicator: (state: IndicatorState) => void;

/**
 * The own car placed in the middle of the scene
 */
const Indicator = (props: any) => {
  const [show, setShow] = useState(false);
  const laneChangeLeftTexture = useLoader(TextureLoader, laneChangeLeft.default) as Texture;
  const laneChangeRightTexture = useLoader(TextureLoader, laneChangeRight.default) as Texture;
  const turnRightTexture = useLoader(TextureLoader, turnRight.default) as Texture;
  const turnLeftTexture = useLoader(TextureLoader, turnLeft.default) as Texture;
  const forwardsTexture = useLoader(TextureLoader, forwards.default) as Texture;
  const backwardsTexture = useLoader(TextureLoader, backwards.default) as Texture;
  const ref = useRef();

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
    <mesh {...props} position={[0, 0, 6]} rotation={[-Math.PI * 0.5, 0, Math.PI]}>
      <planeGeometry args={[6, 7]} />
      <meshBasicMaterial
        ref={ref}
        attach="material"
        transparent={true}
        map={laneChangeLeftTexture}
        opacity={show ? 1 : 0}
      />
    </mesh>
  );
};

export default Indicator;
