import { Direction, Lane } from '../types/enums';
import { sendMessage } from '../connection/connectToServer';

/**
 * change the vehicles velocity
 *
 * @param amount amount the vehicles velocity should be increased
 */
export const changeVelocity = (amount: number): void => {
  sendMessage({ action: 'changeVelocity', amount: amount });
};

/**
 * stops at the next possiblity
 */
export const stop = (): void => {
  sendMessage({ action: 'stop' });
};

/**
 * emergency stops save as fast as possible
 */
export const emergencyStop = (): void => {
  sendMessage({ action: 'emergencyStop' });
};

/**
 * change the direction of the vehicle at the next crossroad
 *
 * @param direction direction the vehicle should turn to
 */
export const changeDirection = (direction: Direction): void => {
  if (!direction) return;
  sendMessage({ action: 'changeDirection', direction: direction });
};

/**
 * change the lane of the vehicle
 *
 * @param lane direction the vehicle should change the lane to
 */
export const changeLane = (lane: Lane): void => {
  if (!lane) return;
  sendMessage({ action: 'changeLane', lane: lane });
};
