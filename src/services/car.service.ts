// TODO docs & implementierung
/**
 * increase the vehicles speed
 * 
 * @param speed amount the vehicles speed should be increased
 */
const increaseSpeed = (speed: number): void => {
  console.log('increaseSpeed by: ', speed, ', to: ', getCurrentSpeed() + speed, ' km/h');
}

/**
 * decrease the vehicles speed
 * 
 * @param speed amount the vehicles speed should be decreased
 */
const decreaseSpeed = (speed: number): void => {
  console.log('decreaseSpeed by: ', speed, ', to: ', getCurrentSpeed() - speed, ' km/h');
}

/**
 * set the vehicels speed
 * 
 * @param speed the speed the vehicle should drive
 */
const setSpeed = (speed: number): void => {
  console.log('setSpeed to: ', speed)
}

/**
 * stops at the next possiblity
 * 
 */
const stop = (): void => {
  // TODO implement
}

/**
 * emergency stops save as fast as possible
 */
const emergencyStop = (): void => {
  // TODO implement
}

/**
 * change the direction of the vehicle at the next crossroad
 * 
 * @param slots direction the vehicle should turn to
 */
const changeDirection = (slots: any): void => {
  console.log('changeDirection to: ', slots);
}

/**
 * change the lane of the vehicle
 * 
 * 
 */
const changeLane = (slots: any) => {
  console.log('changeLane: ', slots);
}

/**
 * get the current speed of the vehicle
 * 
 * @returns current speed
 */
const getCurrentSpeed = (): number => {
  // TODO an Fahrsimulator anbinden
  const currentSpeed = 35;

  return currentSpeed;
}

export default { increaseSpeed, decreaseSpeed, setSpeed, changeDirection, changeLane};