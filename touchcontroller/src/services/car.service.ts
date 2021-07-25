import { sendMessage } from '../connection/connectToServer';
import { translateActionFormCoordinates, xDirection, zDirection } from './drag-util.service';

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
export const changeDirection = (direction: 'links' | 'rechts' | 'geradeaus'): void => {
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

/**
 * Handle the input event and its data to send requested action to server
 */
export const handleDragInput = (x: number, z: number): void => {
  const action = translateActionFormCoordinates(x, z);
  if (action.horizontal == xDirection.LEFT) {
    if (action.vertical == zDirection.MIDDLE) {
      changeLane()
    }
  }
};
