import { sendMessage } from '../index';

const activateMic = () => {
  console.log('activateMic');
  sendMessage({ action: 'activateMic' });
};

export default { activateMic };
