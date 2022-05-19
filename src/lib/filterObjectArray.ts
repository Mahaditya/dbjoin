import type { Columns, RecordKeys, Rows } from '../domain';

import { filterObject } from './filterObject';

export const filterObjectArray = <
  TemplateKeys extends Columns<Obj>,
  TemplateValues extends RecordKeys,
  Obj
>(
  template: Record<TemplateKeys, TemplateValues>,
  objArray: Rows<Obj>
) => objArray.map((obj) => filterObject(template, obj));
