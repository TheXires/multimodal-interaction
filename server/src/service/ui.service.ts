import { sendMessage } from '../index';

/**
 * send message, that voiceController is listening
 */
const listening = (): void => {
  sendMessage({ action: 'listening' });
};

/**
 * send message, that server is processing
 */
const processing = (): void => {
  sendMessage({ action: 'processing' });
};

/**
 * send message, that action is finished
 */
export const finished = (): void => {
  sendMessage({ action: 'finished' });
};

export default { listening, processing, finished };
