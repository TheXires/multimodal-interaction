import { convertTextToNumber } from '../helper/converter';
import carService from '../services/car.service';

// TODO vorher prüfen, ob neue Geschwindigkeit erlaubt/möglich ist
const changeSpeed = (slots: any): void => {
  const speed = convertTextToNumber(slots.speed) || 5;
  if(slots.acceleration === 'schneller'){
    carService.increaseSpeed(speed);
  } else if(slots.acceleration === 'langsamer') {
    carService.decreaseSpeed(speed);
  } else if(slots.acceleration == undefined) {
    // not allowed to set speed under 6 km/h to prevent slower speeds than "schrittgeschwindigkeit"
    // and wrong inputs because of undefind speed slot
    carService.setSpeed(Math.max(speed, 6));
  }
}

// TODO implementieren
const changeDirection = (slots: any): void => {
  console.log('changeDirection: ', slots);
}

// TODO implementieren
const changeLane = (slots: any) => {
  console.log('changeLane: ', slots);
}

export default { changeSpeed, changeDirection, changeLane};