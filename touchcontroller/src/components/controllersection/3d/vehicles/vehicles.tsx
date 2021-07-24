import React, { useEffect, useReducer } from 'react';
import OwnCar from './car';
import ForeignVehicle from './foreignVehicle';
import { registerCallback, Vehicle } from './vehicleAPI';

export default function Vehicles() {
  const [vehicleList, dispatch] = useReducer((oldList: Vehicle[], newList: Vehicle[]) => {
    const strippedList = oldList.filter((old) => newList.some((n) => n.ID == old.ID)); // remove all stale vehicles from old list
    const newlyAddedValues = newList.filter((value) => !oldList.some((o) => o.ID == value.ID)); // detect all vehicles which are not added to the list yet (new added ones)
    return strippedList.concat(newlyAddedValues);
  }, []);

  useEffect(() => {
    registerCallback(dispatch);
  }, []);

  return (
    <React.Fragment>
      <OwnCar />
      {vehicleList.map((v) => {
        return <ForeignVehicle vehicle={v} key={v.ID} />;
      })}
    </React.Fragment>
  );
}
