// TODO docs & implementierung
/**
 * increase the vehicles speed
 * 
 * @param speed amount the vehicles speed should be increased
 */
const increaseSpeed = (speed: number): void => {
  console.log('increaseSpeed by: ', speed);
}

/**
 * decrease the vehicles speed
 * 
 * @param speed amount the vehicles speed should be decreased
 */
const decreaseSpeed = (speed: number): void => {
  console.log('decreaseSpeed by: ', speed);
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
 * change the direction of the vehicle at the next crossroad
 * 
 * @param slots direction the vehicle should turn to
 */
const changeDirection = (slots: any): void => {
  console.log('changeDirection: ', slots);
}

/**
 * change the lane of the vehicle
 * 
 * 
 */
const changeLane = (slots: any) => {
  console.log('changeLane: ', slots);
}

export default { increaseSpeed, decreaseSpeed, setSpeed, changeDirection, changeLane};