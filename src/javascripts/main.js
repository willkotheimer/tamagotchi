import '../styles/main.scss';
import Tamagotchi from '../data/tamagotchi';
import Builder from './components/builderFunctions';

const init = () => {
  console.warn(Tamagotchi.getTamagotchi());
  Builder.domStringBuilder(Tamagotchi.getTamagotchi());
};
init();
