import { sendMessageToServer } from '../connection/connectToServer';

/**
 * notifies server that wake word was detected
 *
 */
const startListening = () => {
  sendMessageToServer({ action: 'startListening' });
};

const stopListening  = () => {
  console.log('test')
  sendMessageToServer({action: 'stopListening'})
}

export default { startListening , stopListening };
