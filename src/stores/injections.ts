import { GlobalGateway } from '../services/global/globalGateway';
import { TazkiaGateway } from '../services/tazkia/tazkiaGateway';

export interface Injections {
  globalService: GlobalGateway;
  tazkiaService: TazkiaGateway;
}
