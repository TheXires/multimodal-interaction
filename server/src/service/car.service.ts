import { sendMessage } from '..';
import { finished } from './ui.service';

/**
 * change the velocity of the vehicle
 * 
 * @param velocity 
 */
const changeVelocity = (velocity: number): void => {
  console.log('changeVelocity: ' + velocity);
  sendMessage({action: 'velocityChanged', velocity: Math.random()*10})
  finished();
};

/**
 * set the velocity of the vehicle
 * 
 * @param velocity 
 */
const setVelocity = (velocity: number): void => {
  console.log('setVelocity: ' + velocity);
  sendMessage({action: 'velocityChanged', velocity: velocity})
  finished();
};

/**
 * stops the vehicle at the next possibility
 */
const stop = (): void => {
  console.log('stop');
  finished();
};

/**
 * stops the vehicle save as fast as possible
 */
const emergencyStop = (): void => {
  console.log('emergencyStop');
  finished();
};

/**
 * change the direction on the next crossroad
 * 
 * @param direction 
 */
const changeDirection = (direction: string): void => {
  console.log('changeDirection: ' + direction);
  finished();
};

/**
 * change the lane
 * 
 * @param direction 
 */
const changeLane = (direction: string): void => {
  console.log('changeLane: ' + direction);
  finished();
};

export default {
  changeVelocity,
  setVelocity,
  stop,
  emergencyStop,
  changeDirection,
  changeLane,
};
