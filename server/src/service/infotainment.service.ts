import { finished } from './ui.service';

const changeTitle = (title: string) => {
  console.log('title: ', title);
  finished();
};

const changeVolume = (volume: string) => {
  console.log('volume: ', volume);
  finished();
};

export default { changeTitle, changeVolume };
