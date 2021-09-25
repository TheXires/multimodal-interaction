/**
 * This module keeps simulation data and its state and provides access to the mocked data.
 * In a real implementation it should be replace by the actual simulator.
 */
import baseData from '../simulation.json';

/**
 * The current velocity
 */
let currentVelocity: number = baseData.startVelocity;

/**
 * @returns The current velocity
 */
const getCurrentVelocity = (): number => {
  return currentVelocity;
};

/**
 * @param amount The amount to change the current velocity by
 */
const changeVelocityBy = (amount: number): void => {
  currentVelocity += amount;
  if (currentVelocity < baseData.minVelocity) {
    currentVelocity = baseData.minVelocity;
  }
  if (currentVelocity > baseData.maxVelocity) {
    currentVelocity = baseData.maxVelocity;
  }
};

/**
 * @param amount The amount to set the velocity to
 */
const setVelocityTo = (amount: number): void => {
  currentVelocity = amount;
  if (currentVelocity < baseData.minVelocity) {
    currentVelocity = baseData.minVelocity;
  }
  if (currentVelocity > baseData.maxVelocity) {
    currentVelocity = baseData.maxVelocity;
  }
};

export { getCurrentVelocity, changeVelocityBy, setVelocityTo };
