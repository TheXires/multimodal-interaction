import { sendMessage } from '../connection/connectToServer';

const activateMic = () => {
  console.log('activateMic');
  sendMessage({ action: 'activateMic' });
};

export default { activateMic };
