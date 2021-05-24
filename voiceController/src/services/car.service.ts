import { socketActive, socket } from '..';

/**
 * change the vehicles speed
 *
 * @param amount amount the vehicles speed should be increased
 */
const changeSpeed = (amount: number): void => {
  console.log('changeSpeed by: ', amount);
  if (socketActive) {
    socket.sendMessage({ action: 'changeSpeed', amout: amount }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * set the vehicels speed
 *
 * @param speed the speed the vehicle should drive
 */
const setSpeed = (speed: number): void => {
  console.log('setSpeed to: ', speed);
  if (socketActive) {
    socket.sendMessage({ action: 'setSpeed', speed: speed }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * stops at the next possiblity
 */
const stop = (): void => {
  console.log('stop vehicle');
  if (socketActive) {
    socket.sendMessage({ action: 'stop' }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * emergency stops save as fast as possible
 */
const emergencyStop = (): void => {
  console.log('emergencyStop vehicle');
  if (socketActive) {
    socket.sendMessage({ action: 'emergencyStop' }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * change the direction of the vehicle at the next crossroad
 *
 * @param direction direction the vehicle should turn to
 */
const changeDirection = (direction: any): void => {
  console.log('changeDirection: ', direction);
  if (socketActive) {
    socket.sendMessage({ action: 'changeDirection', direction: direction }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * change the lane of the vehicle
 *
 * @param direction direction the vehicle should change the lane to
 */
const changeLane = (direction: any) => {
  console.log('changeLane: ', direction);
  if (socketActive) {
    socket.sendMessage({ action: 'changeLane', direction: direction }, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

export default { changeSpeed, setSpeed, changeDirection, changeLane };
