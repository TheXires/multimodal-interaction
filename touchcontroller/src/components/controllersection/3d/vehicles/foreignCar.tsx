import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as modelPath from '../../../../assets/car.fbx';
import { Vehicle } from './vehicleAPI';

/**
 * A foreign car
 */
const ForeignCar = ({ vehicle }: { vehicle: Vehicle }) => {
  const fbx = useLoader(FBXLoader, modelPath.default);
  return (
    <primitive
      scale={0.004}
      rotation={[0, -Math.PI * 0.5, 0]}
      position={[vehicle.lane, -0.13, vehicle.currentPosition]}
      object={fbx}
    />
  );
};

export default ForeignCar;
