import React, { useEffect, useReducer } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import {
  vehicleDelta,
  getVehicles,
  registerCallback,
  unregisterCallback,
  Vehicle,
  VehicleType,
} from './vehicleAPI';
import * as truck from '../../../../assets/truck.fbx';
import * as car from '../../../../assets/car.fbx';

/**
 * A foreign vehicle in the scene
 */
const ForeignVehicle = ({ vehicle }: { vehicle: Vehicle }) => {
  const ref = React.useRef();
  const fbx = useLoader(FBXLoader, vehicle.type == VehicleType.TRUCK ? truck.default : car.default);

  const [positions, dispatch] = useReducer(
    (oldPosObject: any, newList: Vehicle[]) => {
      const oldPos: number = oldPosObject.newPos;
      const newPos: number = newList.find((v) => v.ID == vehicle.ID)!.currentPosition;
      const travelVector = newPos - oldPos;
      return { oldPos, newPos, travelVector };
    },
    { oldPos: 0, newPos: 0, travelVector: 0 },
  );

  useEffect(() => {
    registerCallback(dispatch);
    return () => {
      unregisterCallback(dispatch);
    };
  }, []);

  useFrame(({ clock }) => {
    const v = getVehicles().find((o) => o.ID == vehicle.ID);
    if (ref && ref.current && ref.current.position && v) {
      // const distance = zDelta / delta;
      if (vehicle.type == VehicleType.TRUCK) {
        // console.log(vehicleDelta)
        console.log(clock.getDelta() * 1000)
        
      }
      // ref.current.position.z =+ zDelta /  * 10;
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
