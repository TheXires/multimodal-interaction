import { sendMessage } from '../index';
import { finished } from './ui.service';

const changeSpeed = (speed: number): void => {
  console.log('changeSpeed: ' + speed);
  finished();
};

const setSpeed = (speed: number): void => {
  console.log('setSpeed: ' + speed);
  finished();
};

const stop = (): void => {
  console.log('stop');
  finished();
};

const emergencyStop = (): void => {
  console.log('emergencyStop');
  finished();
};

const changeDirection = (direction: string): void => {
  console.log('changeDirection: ' + direction);
  finished();
};

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
