/* eslint-disable functional/no-let */
/* eslint-disable functional/no-loop-statement */
import type { Columns, RecordKeys, Row, Values } from '../domain';

export const filterObject = <
  TemplateKeys extends Columns<Obj>,
  TemplateValues extends RecordKeys,
  Obj
>(
  template: Record<TemplateKeys, TemplateValues>,
  obj: Row<Obj>
) => {
  let filteredObject = {} as Record<TemplateKeys, Values<Obj>>;
  for (const key in template) {
    filteredObject = { ...filteredObject, [key]: obj[key] };
  }
  return filteredObject;
};
