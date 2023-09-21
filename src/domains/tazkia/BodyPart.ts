import ProgressLine from '../common/ProgressLine';

export type Part = 'eyes' | 'hands' | 'tongue' | 'ears' | 'belly' | 'feet' | 'privateParts';

export default interface BodyPart {
  name: Part;
  purificationProgress: ProgressLine[];
  illuminationProgress: ProgressLine[];
}
