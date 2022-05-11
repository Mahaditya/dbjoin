import { RecordArray, RecordKeys } from '../domain';

import { renameObjectKeys } from './renameObjectKeys';

export const renameArrayObjects = <
  A extends RecordKeys,
  B,
  C extends RecordKeys
>(
  template: Record<A, C>,
  objArray: RecordArray<A, B>
) => objArray.map((obj) => renameObjectKeys(template, obj));
