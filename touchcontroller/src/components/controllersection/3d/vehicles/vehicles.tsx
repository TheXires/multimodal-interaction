import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import OwnCar from './car';
import ForeignCar from './foreignCar';
import Truck from './truck';
import { getVehicles, registerCallback, removeCallback, Vehicle, VehicleType } from './vehicleAPI';

export default function Vehicles() {
  return (
    <React.Fragment>
      <OwnCar />
      {cars()}
    </React.Fragment>
  );
}

/**
 * Returns the cars according to the current list
 * @returns The 3d car objects for the scene
 */
function cars() {
  const [displayedVehicles, setDisplayedVehicles] = useState<Vehicle[]>(getVehicles());

  useEffect(() => {
    // callback to execute when vehicle list gets changed
    const callback = (newVehicleList: Vehicle[]) => {
      // remove obsolete vehicles
      // const newVehicleArray = displayedVehicles.filter((v) =>
      //   newVehicleList.some((v2) => v.ID == v2.ID),
      // );
      // // add new vehicles
      // newVehicleArray.push(
      //   ...newVehicleList.filter((v) => !newVehicleArray.some((v2) => v.ID == v2.ID)),
      // );
      setDisplayedVehicles(newVehicleList);
    };

    registerCallback(callback);
  }, []);

  useFrame(({ clock }) => {
    // clock.getElapsedTime();
  });

  return displayedVehicles.map((v) => {
    if (v.type == VehicleType.CAR) {
      return <ForeignCar vehicle={v} key={v.ID} />;
    } else if (v.type == VehicleType.TRUCK) {
      return <Truck vehicle={v} key={v.ID} />;
    }
  });
}
