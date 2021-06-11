import uiService from '../services/ui.service';

const startListening = () => {
  uiService.startListening();
};

const stopListening = () => {
  uiService.stopListening();
};

export default { startListening , stopListening};
