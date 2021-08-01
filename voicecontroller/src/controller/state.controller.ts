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

/**
 * notifies server that input was not understood
 */
const notUnderstood = (): void => {
  stateService.notUnderstood();
};

export default { startListening, stopListening, notUnderstood };
