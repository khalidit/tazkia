import { PathType } from '../../domains/common/PathType';
import { readData, storeData } from '../../stores/storage-engine';
import { GlobalGateway } from './globalGateway';

export class GlobalAdapter implements GlobalGateway {
  private readonly path: PathType = 'global';

  findProgress(): Promise<boolean> {
    return readData(`${this.path}_progress`).then((value: boolean) => value);
  }

  startProgress(): Promise<void> {
    return storeData(`${this.path}_progress`, true);
  }
}
