import carService from '../service/car.service';
import uiService from '../service/ui.service';
import { Action } from '../types/actions';

/**
 * identify intent from clients and calls according function
 * 
 * @param req action request from controllers
 */
const processRequest = (req: Action): void => {
  console.log('req: ', req);
  switch (req.action) {
    // voicecontroller only
    case 'startListening':
      uiService.listening();
      break;
    case 'stopListening':
      uiService.processing();
      break;

    // both
    case 'changeSpeed':
      carService.changeSpeed(req.amount);
      break;
    case 'setSpeed':
      carService.setSpeed(req.speed);
      break;
    case 'stop':
      carService.stop();
      break;
    case 'emergencyStop':
      carService.emergencyStop();
      break;
    case 'changeDirection':
      carService.changeDirection(req.direction);
      break;
    case 'changeLane':
      carService.changeLane(req.direction);
      break;
    default:
      uiService.finished();
  }
};

export default { processRequest };
