import { sendMessageToUI } from '../connection/connectToClient';

const changeSpeed = (speed: number): void => {
  console.log('changeSpeed: ' + speed);
  sendMessageToUI({ action: 'finished' });
};

const setSpeed = (speed: number): void => {
  console.log('setSpeed: ' + speed);
  sendMessageToUI({ action: 'finished' });
};

const stop = (): void => {
  console.log('stop');
  sendMessageToUI({ action: 'finished' });
};

const emergencyStop = (): void => {
  console.log('emergencyStop');
  sendMessageToUI({ action: 'finished' });
};

const changeDirection = (direction: string): void => {
  console.log('changeDirection: ' + direction);
  sendMessageToUI({ action: 'finished' });
};

const changeLane = (direction: string): void => {
  console.log('changeLane: ' + direction);
  sendMessageToUI({ action: 'finished' });
};

export default {
  changeSpeed,
  setSpeed,
  stop,
  emergencyStop,
  changeDirection,
  changeLane,
};
