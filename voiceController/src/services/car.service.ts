import { socketActive, socket } from "..";

// TODO docs & implementierung
/**
 * increase the vehicles speed
 *
 * @param amount amount the vehicles speed should be increased
 */
const increaseSpeed = (amount: number): void => {
  console.log('increaseSpeed by: ', amount, ', to: ', getCurrentSpeed() + amount, ' km/h');
  if(socketActive){
    socket.sendMessage({action: 'increaseSpeed', amout: amount}, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * decrease the vehicles speed
 *
 * @param amount amount the vehicles speed should be decreased
 */
const decreaseSpeed = (amount: number): void => {
  console.log('decreaseSpeed by: ', amount, ', to: ', getCurrentSpeed() - amount, ' km/h');
  if(socketActive){
    socket.sendMessage({action: 'decreaseSpeed', amout: amount}, (error) => {
      if(error){
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
  if(socketActive){
    socket.sendMessage({action: 'setSpeed', speed: speed}, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
  }
};

/**
 * stops at the next possiblity
 *
 */
const stop = (): void => {
  // TODO implement
};

/**
 * emergency stops save as fast as possible
 */
const emergencyStop = (): void => {
  // TODO implement
};

/**
 * change the direction of the vehicle at the next crossroad
 *
 * @param slots direction the vehicle should turn to
 */
const changeDirection = (slots: any): void => {
  console.log('changeDirection to: ', slots);
};

/**
 * change the lane of the vehicle
 *
 *
 */
const changeLane = (slots: any) => {
  console.log('changeLane: ', slots);
};

/**
 * get the current speed of the vehicle
 *
 * @returns current speed
 */
const getCurrentSpeed = (): number => {
  // TODO an Fahrsimulator anbinden
  const currentSpeed = 35;

  return currentSpeed;
};

export default { increaseSpeed, decreaseSpeed, setSpeed, changeDirection, changeLane };
