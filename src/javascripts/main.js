import '../styles/main.scss';
import builderFunction from './components/builderFunctions';
import tamagotchi from '../data/tamagotchi';

const array = tamagotchi.getTamagotchi();
const init = () => {
  builderFunction.domStringBuilder(array);
};
init();
