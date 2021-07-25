import React from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as modelPath from '../../../assets/Urus.fbx';

/**
 * The own car placed in the middle of the scene
 */
const OwnCar = React.forwardRef((props: any, ref: any) => {
  const fbx = useLoader(FBXLoader, modelPath.default);
  return <primitive ref={ref} scale={0.004} position={[0, 0.3, 0]} object={fbx} />;
});

export default OwnCar;
