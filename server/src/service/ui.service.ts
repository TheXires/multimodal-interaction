import { sendMessage } from '../index';

const listening = (): void => {
  sendMessage({ action: 'listening' });
};

const processing = (): void => {
  sendMessage({ action: 'processing' });
};

export const finished = (): void => {
  sendMessage({ action: 'finished' });
};

export default { listening, processing, finished };
