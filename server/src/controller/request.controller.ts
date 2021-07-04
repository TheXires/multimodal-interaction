import carService from '../service/car.service';
import uiService from '../service/ui.service';

const processRequest = (req): void => {
  switch (req.action) {
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
    case 'startListening':
      uiService.listening();
      break;
    case 'stopListening':
      uiService.processing();
      break;
    default:
      console.log('invalid command');
      uiService.finished();
  }
};

export default { processRequest };
