import stateService from '../services/state.service';

const startListening = () => {
  stateService.startListening();
};

const stopListening = () => {
  stateService.stopListening();
};

export default { startListening , stopListening};
