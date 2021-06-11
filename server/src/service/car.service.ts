const changeSpeed = (speed: number): void => {
  console.log('changeSpeed: ' + speed);
};

const setSpeed = (speed: number): void => {
  console.log('setSpeed: ' + speed);
};

const stop = (): void => {
  console.log('stop');
};

const emergencyStop = (): void => {
  console.log('emergencyStop');
};

const changeDirection = (direction: string): void => {
  console.log('changeDirection: ' + direction);
};

const changeLane = (direction: string): void => {
  console.log('changeLane: ' + direction);
};

export default {
  changeSpeed,
  setSpeed,
  stop,
  emergencyStop,
  changeDirection,
  changeLane,
};
