import stateService from '../services/state.service';

const startListening = (): void => {
  stateService.startListening();
};

const stopListening = (): void => {
  stateService.stopListening();
};

export default { startListening, stopListening };
