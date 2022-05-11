/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-let */
import type { RecordKeys } from '../domain';

export const renameObjectKeys = <A extends RecordKeys, B, C extends RecordKeys>(
  template: Record<A, C>,
  obj: Record<A, B>
) => {
  let mergedRecord = {} as Record<C, B>;
  for (const key in obj) {
    mergedRecord = { ...mergedRecord, [template[key]]: obj[key] };
  }
  return mergedRecord;
};
