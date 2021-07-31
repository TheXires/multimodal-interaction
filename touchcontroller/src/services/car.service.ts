import { Direction, Lane } from '../types/enums';
import { sendMessage } from '../connection/connectToServer';

/**
 * change the vehicles velocity
 *
 * @param amount amount the vehicles velocity should be increased
 */
export const changeVelocity = (amount: number): void => {
  console.log('changeVelocity by: ', amount);
  // sendMessageToServer({ action: 'changeVelocity', amount: amount });
  sendMessage({ action: 'changeVelocity', amount: amount });
};

/**
 * set the vehicels velocity
 *
 * @param velocity the velocity the vehicle should drive
 */
export const setVelocity = (velocity: number): void => {
  console.log('setVelocity to: ', velocity);
  sendMessage({ action: 'setVelocity', velocity: velocity });
};

/**
 * stops at the next possiblity
 */
export const stop = (): void => {
  console.log('stop vehicle');
  sendMessage({ action: 'stop' });
};

/**
 * emergency stops save as fast as possible
 */
export const emergencyStop = (): void => {
  console.log('emergencyStop vehicle');
  sendMessage({ action: 'emergencyStop' });
};

/**
 * change the direction of the vehicle at the next crossroad
 *
 * @param direction direction the vehicle should turn to
 */
export const changeDirection = (direction: Direction): void => {
  console.log('changeDirection service: ', direction);
  if (!direction) return;
  sendMessage({ action: 'changeDirection', direction: direction });
};

/**
 * change the lane of the vehicle
 *
 * @param lane direction the vehicle should change the lane to
 */
export const changeLane = (lane: Lane): void => {
  console.log('changeLane: ', lane);
  if (!lane) return;
  sendMessage({ action: 'changeLane', lane: lane });
};
