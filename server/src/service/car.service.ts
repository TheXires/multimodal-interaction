import { finished } from './ui.service';

/**
 * change the speed of the vehicle
 * 
 * @param speed 
 */
const changeSpeed = (speed: number): void => {
  console.log('changeSpeed: ' + speed);
  finished();
};

/**
 * set the speed of the vehicle
 * 
 * @param speed 
 */
const setSpeed = (speed: number): void => {
  console.log('setSpeed: ' + speed);
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
  changeSpeed,
  setSpeed,
  stop,
  emergencyStop,
  changeDirection,
  changeLane,
};
