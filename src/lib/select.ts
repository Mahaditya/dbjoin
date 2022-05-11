import { RecordArray, RecordKeys } from '../domain';

import { filterObjectArray } from './filterObjectArray';
import { leftJoinArray } from './leftJoinArray';
import { renameArrayObjects } from './renameArrayObjects';

const on =
  <
    TableName extends string,
    LeftTableKeys extends RecordKeys,
    RightTableKeys extends RecordKeys,
    TemplateKeys extends LeftTableKeys | RightTableKeys,
    TemplateValues extends RecordKeys,
    LeftTableValues,
    RightTableValues
  >(
    masterTemplate: Record<TableName, Record<TemplateKeys, TemplateValues>>
  ) =>
  (leftTable: RecordArray<LeftTableKeys, LeftTableValues>) =>
  (rightTable: RecordArray<RightTableKeys, RightTableValues>) =>
  (joinKeys: readonly (LeftTableKeys & RightTableKeys)[]) => {
    const joinedArray = leftJoinArray(leftTable, rightTable, joinKeys);

    return {
      leftJoin: leftJoin(masterTemplate)(joinedArray),
      end: () => joinedArray,
    };
  };

const leftJoin =
  <
    TableName extends string,
    LeftTableKeys extends RecordKeys,
    RightTableKeys extends RecordKeys,
    TemplateKeys extends RightTableKeys,
    TemplateValues extends RecordKeys,
    LeftTableValues,
    RightTableValues
  >(
    masterTemplate: Record<TableName, Record<TemplateKeys, TemplateValues>>
  ) =>
  (leftTable: RecordArray<LeftTableKeys, LeftTableValues>) =>
  (
    rightTableName: TableName,
    rightTable: RecordArray<RightTableKeys, RightTableValues>
  ) => {
    const filteredObjectArray = filterObjectArray(
      masterTemplate[rightTableName],
      rightTable
    );
    const renamedObjectArray = renameArrayObjects(
      masterTemplate[rightTableName],
      filteredObjectArray
    );

    return {
      on: on(masterTemplate)(leftTable)(renamedObjectArray),
    };
  };

const from =
  <
    TableName extends string,
    TableKeys extends RecordKeys,
    TemplateKeys extends TableKeys,
    TemplateValues extends RecordKeys,
    TableValues
  >(
    template: Record<TableName, Record<TemplateKeys, TemplateValues>>
  ) =>
  (tableName: TableName, table: RecordArray<TableKeys, TableValues>) => {
    const filteredObjectArray = filterObjectArray(template[tableName], table);
    const renamedObjectArray = renameArrayObjects(
      template[tableName],
      filteredObjectArray
    );
    return {
      leftJoin: leftJoin(template)(renamedObjectArray),
    };
  };

export const select = <
  TableName extends string,
  TemplateKeys extends RecordKeys,
  TemplateValues extends RecordKeys
>(
  template: Record<TableName, Record<TemplateKeys, TemplateValues>>
) => {
  return {
    from: from(template),
  };
};
