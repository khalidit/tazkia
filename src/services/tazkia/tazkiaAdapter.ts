import { PathType } from '../../domains/common/PathType';
import Tazkia from '../../domains/tazkia/Tazkia';
import { readData, storeData } from '../../stores/storage-engine';
import { TazkiaGateway } from './tazkiaGateway';

/**
 * Adapter for tazkia gateway
 *
 * @author Khalid ALIANNE
 * @since 20/09/2023
 */
export class TazkiaAdapter implements TazkiaGateway {
  private readonly path: PathType = 'tazkia';

  find(): Promise<Tazkia> {
    return readData(this.path).then((value: Tazkia) => value);
  }

  createOrUpdate(value: Tazkia): Promise<Tazkia> {
    return storeData(this.path, value).then(() => value);
  }
}
