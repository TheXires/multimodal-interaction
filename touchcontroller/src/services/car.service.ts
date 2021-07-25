import { sendMessage } from '../connection/connectToServer';

/**
 * change the vehicles speed
 *
 * @param amount amount the vehicles speed should be increased
 */
export const changeSpeed = (amount: number): void => {
  console.log('changeSpeed by: ', amount);
  // sendMessageToServer({ action: 'changeSpeed', amount: amount });
  sendMessage({ action: 'changeSpeed', amount: amount });
};

/**
 * set the vehicels speed
 *
 * @param speed the speed the vehicle should drive
 */
export const setSpeed = (speed: number): void => {
  console.log('setSpeed to: ', speed);
  sendMessage({ action: 'setSpeed', speed: speed });
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
export const changeDirection = (direction: 'links' | 'rechts'): void => {
  console.log('changeDirection service: ', direction);
  sendMessage({ action: 'changeDirection', direction: direction });
};

/**
 * change the lane of the vehicle
 *
 * @param direction direction the vehicle should change the lane to
 */
export const changeLane = (direction: 'links' | 'rechts'): void => {
  console.log('changeLane: ', direction);
  sendMessage({ action: 'changeLane', direction: direction });
};