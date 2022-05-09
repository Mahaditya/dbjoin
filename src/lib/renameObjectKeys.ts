/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-let */

export const renameObjectKeys = <A extends string, B, C extends string>(
  template: Record<A, C>,
  obj: Record<A, B>
) => {
  let mergedRecord = {} as Record<C, B>;
  for (const key in obj) {
    mergedRecord = { ...mergedRecord, [template[key]]: obj[key] };
  }
  return mergedRecord;
};
