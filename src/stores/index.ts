import { createStore } from 'easy-peasy';
import { Configuration } from '../configuration';
import model from './model';

const injections = {
  globalService: Configuration.globalGateway,
  tazkiaService: Configuration.tazkiaGateway,
};

const store = createStore(model, { injections });

export default store;
