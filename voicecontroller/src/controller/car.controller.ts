import { convertTextToNumber } from '../helper/converter';
import carService from '../services/car.service';

/**
 * change and set the vehicles speed
 */
const changeSpeed = (slots: any): void => {
  const speed = convertTextToNumber(slots.speed) || 5;
  if (slots.acceleration === 'schneller') {
    carService.changeSpeed(speed);
  } else if (slots.acceleration === 'langsamer') {
    carService.changeSpeed(-speed);
  } else if (slots.acceleration == undefined) {
    // not allowed to set speed under 6 km/h to prevent slower speeds than "schrittgeschwindigkeit"
    // and wrong inputs because of undefind speed slot
    carService.setSpeed(Math.max(speed, 6));
  }
};

/**
 * stop the vehicle at the next possibility
 */
const stop = (): void => {
  carService.stop();
};

/**
 * emergency stop the vehicle save as fast as possible
 */
const emergencyStop = (): void => {
  carService.emergencyStop();
};

/**
 * change the direction of the vehicle at the next crossroad
 */
const changeDirection = (slots: any): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeDirection(direction);
};

/**
 * change the lane of the vehicle
 */
const changeLane = (slots: any): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeLane(direction);
};

export default { changeSpeed, stop, emergencyStop, changeDirection, changeLane };
