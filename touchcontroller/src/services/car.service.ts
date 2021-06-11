import { sendMessageToServer } from '../connection/connectToServer';

/**
 * change the vehicles speed
 *
 * @param amount amount the vehicles speed should be increased
 */
const changeSpeed = (amount: number): void => {
  console.log('changeSpeed by: ', amount);
  sendMessageToServer({ action: 'changeSpeed', amount: amount });
};

/**
 * set the vehicels speed
 *
 * @param speed the speed the vehicle should drive
 */
const setSpeed = (speed: number): void => {
  console.log('setSpeed to: ', speed);
  sendMessageToServer({ action: 'setSpeed', speed: speed });
};

/**
 * stops at the next possiblity
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
const changeDirection = (direction: any): void => {
  console.log('changeDirection service: ', direction);
  sendMessageToServer({ action: 'changeDirection', direction: direction });
};

/**
 * change the lane of the vehicle
 *
 * @param direction direction the vehicle should change the lane to
 */
const changeLane = (direction: any): void => {
  console.log('changeLane: ', direction);
  sendMessageToServer({ action: 'changeLane', direction: direction });
};

export default { changeSpeed, setSpeed, stop, emergencyStop, changeDirection, changeLane };
