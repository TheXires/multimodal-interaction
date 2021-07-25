import { sendMessage } from '../connection/connectToServer';

export const activateMic = () => {
  console.log('activateMic');
  sendMessage({ action: 'activateMic' });
};

