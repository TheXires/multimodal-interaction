import carService from '../service/car.service';
import uiService from '../service/ui.service';
import { Action } from '../types/actions';

/**
 * identify intent from clients and calls according function
 *
 * @param req action request from controllers
 */
const processRequest = (req: Action): void => {
  switch (req.action) {
    // voicecontroller only
    case 'startListening':
      uiService.listening();
      break;
    case 'stopListening':
      uiService.processing();
      break;
    case 'notUnderstood':
      uiService.finished();
      break;

    // both
    case 'changeVelocity':
      carService.changeVelocity(req.amount);
      break;
    case 'setVelocity':
      carService.setVelocity(req.velocity);
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
