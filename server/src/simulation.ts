/**
 * This module keeps simulation data and its state and provides access to the mocked data.
 * In a real implementation it should be replace by the actual simulator
 *
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
  currentVelocity += checkBoundaries(amount);
};

/**
 * @param amount The amount to set the velocity to
 */
const setVelocityTo = (amount: number): void => {
  currentVelocity = checkBoundaries(amount);
};

/**
 * Makes sure the boundaries are not exceeded
 * @param amount the amount to check
 * @returns the checked amount
 */
function checkBoundaries(amount: number) {
  if (amount < baseData.minVelocity) {
    amount = 0;
  }
  if (amount > baseData.maxVelocity) {
    amount = 130;
  }
  return amount;
}

export { getCurrentVelocity, changeVelocityBy, setVelocityTo };
