import { GlobalAdapter } from './services/global/globalAdapter';
import { GlobalGateway } from './services/global/globalGateway';
import { TazkiaAdapter } from './services/tazkia/tazkiaAdapter';
import { TazkiaGateway } from './services/tazkia/tazkiaGateway';

class ManualDependenciesConfiguration {
  private readonly _globalGateway: GlobalGateway;
  private readonly _tazkiaGateway: TazkiaGateway;

  constructor() {
    this._globalGateway = new GlobalAdapter();
    this._tazkiaGateway = new TazkiaAdapter();
  }

  get globalGateway(): GlobalGateway {
    return this._globalGateway;
  }

  get tazkiaGateway(): TazkiaGateway {
    return this._tazkiaGateway;
  }
}

export const Configuration = new ManualDependenciesConfiguration();
