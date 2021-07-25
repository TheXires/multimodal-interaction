import { forceListening } from '../index';

const processRequest = (req: any): void => {
  switch (req.action) {
    case 'activateMic':
      console.log('called')
      forceListening();
      break;
  }
};

export default { processRequest };
