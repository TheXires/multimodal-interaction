import { sendMessageToServer } from '../connection/connectToServer';

/**
 * notifies server that wake word was detected and recording started
 */
const startListening = (): void => {
  sendMessageToServer({ action: 'startListening' });
};

/**
 * notifies server that recording ended
 */
const stopListening = (): void => {
  sendMessageToServer({ action: 'stopListening' });
};

/**
 * notifies server that input was not understood
 */
const notUnderstood = (): void => {
  sendMessageToServer({ action: 'notUnderstood' });
};

export default { startListening, stopListening, notUnderstood };
