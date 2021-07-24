import React, {useEffect} from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { delta, getVehicles, Vehicle, VehicleType } from './vehicleAPI';
import * as truck from '../../../../assets/truck.fbx';
import * as car from '../../../../assets/car.fbx';

/**
 * A foreign vehicle in the scene
 */
const ForeignVehicle = ({ vehicle }: { vehicle: Vehicle }) => {
  const ref = React.useRef();
  const fbx = useLoader(FBXLoader, vehicle.type == VehicleType.TRUCK ? truck.default : car.default);

  useEffect(() => {
    return () => {
      console.log('called cleanup');
    };
  }, []);

  useFrame(({ clock }) => {
    const v = getVehicles().find((o) => o.ID == vehicle.ID);
    if (ref && ref.current && ref.current.position && v) {
      const zDelta = ref.current.position.x - v.currentPosition;
      const distance = zDelta / delta;
      ref.current.position.z += distance * clock.getElapsedTime();
    }
  });

  return (
    <primitive
      scale={vehicle.type == VehicleType.TRUCK ? 0.006 : 0.004}
      rotation={[0, -Math.PI * 0.5, 0]}
      position={[vehicle.lane, -0.13, vehicle.currentPosition]}
      object={fbx}
      ref={ref}
    />
  );
};

export default ForeignVehicle;
