/**
 * A lane on the road. The values represent the offset in the scene
 */
export enum Lane {
  LEFT = 1.6,
  MIDDLE = 0,
  RIGHT = -1.6,
}
/**
 * Which model should be used for the vehicle
 */
export enum VehicleType {
  TRUCK,
  CAR,
}

/**
 * An interface representing a vehicle in the scene
 */
export interface Vehicle {
  /**
   * A unique id of the vehicle. Used for position interpolation
   */
  ID: number;
  /**
   * Current Z of the car
   */
  currentPosition: number;
  lane: Lane;
  type: VehicleType;
}

/**
 * Contains all foreign vehicles on the road
 */
let vehicles: Vehicle[] = [];

/**
 * Keeps track of all registered callbacks which want to be notified when the vehicle list changes
 */
const callbacks: ((newVehiclesList: Vehicle[]) => void)[] = [];

/**
 * @returns The vehicle list containing all foreign vehicles on the road
 */
export function getVehicles() {
  return vehicles;
}

/**
 * Sets the vehicle list.
 * @param value The new value
 */
export function setVehicles(value: Vehicle[]) {
  vehicles = value;
  callbacks.forEach((c) => c(value));
}

/**
 * Registers a callback for the vehicle list change event
 * @param func The function to register
 */
export function registerCallback(func: (newVehiclesList: Vehicle[]) => void) {
  console.log(callbacks.length);
  callbacks.push(func);
  console.log(callbacks.length);
}

/* DEBUG/TESING */

// vehicles = [
//   {
//     ID: 0,
//     currentPosition: 0,
//     lane: Lane.LEFT,
//     type: VehicleType.CAR,
//   },
//   {
//     ID: 1,
//     currentPosition: 0,
//     lane: Lane.RIGHT,
//     type: VehicleType.TRUCK,
//   },
// ];

let a = true;
setInterval(() => {
  if (a) {
    a = false;
    setVehicles([
      //   {
      //     ID: 0,
      //     currentPosition: 0,
      //     lane: Lane.LEFT,
      //     type: VehicleType.CAR,
      //   },
      {
        ID: 1,
        currentPosition: 0,
        lane: Lane.RIGHT,
        type: VehicleType.TRUCK,
      },
    ]);
  } else {
    a = true;
    setVehicles([
      //   {
      //     ID: 0,
      //     currentPosition: 1,
      //     lane: Lane.LEFT,
      //     type: VehicleType.CAR,
      //   },
      {
        ID: 1,
        currentPosition: 2,
        lane: Lane.RIGHT,
        type: VehicleType.TRUCK,
      },
    ]);
  }
}, 5000);
