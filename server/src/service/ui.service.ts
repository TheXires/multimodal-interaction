import { sendMessageToUI } from '../connection/connectToClient';

const listening = (): void => {
  sendMessageToUI({ action: 'listening' });
};

const processing = (): void => {
  sendMessageToUI({ action: 'processing' });
};

const finished = (): void => {
  sendMessageToUI({ action: 'finished' });
};

export default { listening, processing, finished };
