import carService from '../service/car.service';
import uiService from '../service/ui.service';
import infotainmendService from '../service/infotainment.service';

const processRequest = (req): void => {
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
    case 'changeTitle':
      infotainmendService.changeTitle(req.title);
      break;
    case 'changeVolume':
      infotainmendService.changeVolume(req.volume);
      break;
    default:
      console.log('invalid command');
      uiService.finished();
  }
};

export default { processRequest };
