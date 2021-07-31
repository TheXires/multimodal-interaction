import { sendMessageToServer } from '../connection/connectToServer';
import { Direction, Lane } from '../types/enums';

/**
 * change the vehicles velocity
 *
 * @param amount amount the vehicles velocity should be increased
 */
const changeVelocity = (amount: number): void => {
  console.log('changeVelocity by: ', amount);
  sendMessageToServer({ action: 'changeVelocity', amount: amount });
};

/**
 * set the vehicels velocity
 *
 * @param velocity the velocity the vehicle should drive
 */
const setVelocity = (velocity: number): void => {
  console.log('setVelocity to: ', velocity);
  sendMessageToServer({ action: 'setVelocity', velocity: velocity });
};

/**
 * stops at the next possibility
 */
const stop = (): void => {
  console.log('stop vehicle');
  sendMessageToServer({ action: 'stop' });
};

/**
 * emergency stops save as fast as possible
 */
const emergencyStop = (): void => {
  console.log('emergencyStop vehicle');
  sendMessageToServer({ action: 'emergencyStop' });
};

/**
 * change the direction of the vehicle at the next crossroad
 *
 * @param direction direction the vehicle should turn to
 */
const changeDirection = (direction: Direction): void => {
  console.log('changeDirection service: ', direction);
  sendMessageToServer({ action: 'changeDirection', direction: direction });
};

/**
 * change the lane of the vehicle
 *
 * @param lane direction the vehicle should change the lane to
 */
const changeLane = (direction: Lane): void => {
  console.log('changeLane: ', direction);
  sendMessageToServer({ action: 'changeLane', lane: direction });
};

export default { changeVelocity, setVelocity, stop, emergencyStop, changeDirection, changeLane };
