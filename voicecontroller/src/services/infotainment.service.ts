import { sendMessageToServer } from '../connection/connectToServer';

/**
 * jump ahead to the next or back to the previous song
 *
 * @param title
 */
const changeTitle = (title: string): void => {
  console.log('called changeTitle: ', title);
};

/**
 * lower or raise the volume
 *
 * @param volume
 */
const changeVolume = (volume: string): void => {
  console.log('called changeVolume: ', volume);
};

export default { changeTitle, changeVolume };
