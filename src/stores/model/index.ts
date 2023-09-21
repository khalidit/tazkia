import globalModel, { GlobalModel } from './global.model';
import intlModel, { IntlModel } from './intl.model';
import { TazkiaModel, tazkiaModel } from './tazkia.model';

export interface AppStoreModel {
  global: GlobalModel;
  intl: IntlModel;
  tazkia: TazkiaModel;
}

const model: AppStoreModel = {
  global: globalModel,
  intl: intlModel,
  tazkia: tazkiaModel,
};

// export the typed hooks
export default model;
