import { convertTextToNumber } from '../helper/converter';
import carService from '../services/car.service';

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

const stop = (): void => {
  carService.stop();
};

const emergencyStop = (): void => {
  carService.emergencyStop();
};

const changeDirection = (slots: any): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeDirection(direction);
};

const changeLane = (slots: any): void => {
  const direction = slots.direction || undefined;
  if (direction == undefined) return;
  carService.changeLane(direction);
};

export default { changeSpeed, stop, emergencyStop, changeDirection, changeLane };
