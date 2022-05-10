/* eslint-disable functional/no-let */
/* eslint-disable functional/no-loop-statement */
type RecordValue = string | number | symbol;

export const filterObject = <A extends RecordValue, B, C extends A, D>(
  template: Record<C, B>,
  obj: Record<A, D>
) => {
  let filteredObject = {} as Record<C, D>;
  for (const key in template) {
    filteredObject = { ...filteredObject, [key]: obj[key] };
  }
  return filteredObject
};


