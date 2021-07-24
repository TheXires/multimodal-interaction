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
const callbacks: ((newVehiclesList: Vehicle[], millisSinceLastUpdate?: number) => void)[] = [];

/**
 * Timestamp marking the last update for the vehicle list
 */
let lastUpdatedTimestamp = Date.now();
/**
 * The duration the last fetch took (ms)
 */
export let vehicleDelta = 250;
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
  vehicleDelta = Date.now() - lastUpdatedTimestamp;
  lastUpdatedTimestamp = Date.now();
  callbacks.forEach((c) => c(value, vehicleDelta));
}

/**
 * Registers a callback for the vehicle list change event
 * @param func The function to register
 */
export function registerCallback(
  func: (newVehiclesList: Vehicle[], millisSinceLastUpdate?: number) => void,
) {
  callbacks.push(func);
}

/**
 * Unregisters a callback for the vehicle list change event
 * @param func The function to unregister
 */
export function unregisterCallback(
  func: (newVehiclesList: Vehicle[], millisSinceLastUpdate?: number) => void,
) {
  const i = callbacks.findIndex((f) => f == func);
  callbacks.splice(i, 1);
}

/* DEBUG/TESING */

let a = true;
setInterval(() => {
  if (a) {
    a = false;
    setVehicles([
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
      {
        ID: 0,
        currentPosition: 1,
        lane: Lane.LEFT,
        type: VehicleType.CAR,
      },
      {
        ID: 1,
        currentPosition: 2,
        lane: Lane.RIGHT,
        type: VehicleType.TRUCK,
      },
    ]);
  }
}, 3000);
