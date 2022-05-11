import type { RecordArray, RecordKeys } from '../domain';

import { filterObject } from './filterObject';

export const filterObjectArray = <A extends RecordKeys, B, C extends A, D>(
  template: Record<C, B>,
  objArray: RecordArray<A, D>
) => objArray.map((obj) => filterObject(template, obj));
