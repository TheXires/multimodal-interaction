import carService from '../service/car.service';
import uiService from '../service/ui.service';

const processRequest = (req) => {
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
      uiService.startListening();
      break;
    case 'stopListening':
      uiService.stopListening();
      break;
    default:
      console.log('invalid command');
  }
};

export default { processRequest };
