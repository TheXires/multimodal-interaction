import stateService from '../services/state.service';

/**
 * send message that the voiceController started listening
 */
const startListening = (): void => {
  stateService.startListening();
};

/**
 * send message that the voiceController stopped listening
 */
const stopListening = (): void => {
  stateService.stopListening();
};

export default { startListening, stopListening };
