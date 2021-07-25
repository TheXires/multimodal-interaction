import { sendMessageToServer } from '../connection/connectToServer';

/**
 * notifies server that wake word was detected and recording started
 */
const startListening = () => {
  sendMessageToServer({ action: 'startListening' });
};

/**
 * notifies server that recording ended
 */
const stopListening  = () => {
  console.log('test')
  sendMessageToServer({action: 'stopListening'})
}

export default { startListening , stopListening };
