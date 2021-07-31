import { convertTextToNumber } from '../helper/converter';
import carService from '../services/car.service';
import { ChangeDirectionSlot, ChangeLaneSlot, ChangeVelocitySlot } from '../types/slots';

/**
 * change and set the vehicles velocity
 */
const changeVelocity = (slots: ChangeVelocitySlot): void => {
  console.log('called: ', slots);
  const velocity = convertTextToNumber(slots.velocity) ?? 5;
  if (slots.acceleration === 'schneller') {
    carService.changeVelocity(velocity);
  } else if (slots.acceleration === 'langsamer') {
    carService.changeVelocity(-velocity);
  } else if (slots.acceleration == undefined) {
    // not allowed to set velocity under 6 km/h to prevent slower velocity than "Schrittgeschwindigkeit"
    // and wrong inputs because of undefind velocity slot
    carService.setVelocity(Math.max(velocity, 6));
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
const changeDirection = (slots: ChangeDirectionSlot): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeDirection(direction);
};

/**
 * change the lane of the vehicle
 */
const changeLane = (slots: ChangeLaneSlot): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeLane(direction);
};

export default { changeVelocity, stop, emergencyStop, changeDirection, changeLane };
