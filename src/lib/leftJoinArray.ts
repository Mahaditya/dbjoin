import { leftJoinObject } from './leftJoinObject';

type RecordKeys = string | number | symbol;
type RecordArray<A extends RecordKeys, B> = readonly Record<A, B>[];

export const leftJoinArray = <A extends RecordKeys, B, C extends RecordKeys, D>(
  leftArray: RecordArray<A, B>,
  rightArray: RecordArray<C, D>,
  joinKeys: readonly (C & A)[]
) => {
  const mergedArray = leftArray.reduce((runningArray, currObject) => {
    const rightObjects = rightArray.filter((rightObject) => {
      const initialValue = true as boolean;
      return joinKeys.reduce((finalFlag, currKey) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return finalFlag && rightObject[currKey] === currObject[currKey];
      }, initialValue);
    });

    if (rightObjects?.length === 0) {
      const joinedObject = leftJoinObject(
        currObject,
        null,
        Object.keys(rightArray?.[0]) as unknown as readonly C[]
      );
      return [...runningArray, joinedObject];
    }
    const joinedObjects = rightObjects.map((rightObject) => {
      return leftJoinObject(
        currObject,
        rightObject,
        Object.keys(rightObject) as unknown as readonly C[]
      );
    });
    return [...runningArray, ...joinedObjects];
  }, [] as readonly ((Record<A, B> & Record<C, null>) | (Record<A, B> & Record<C, D>))[]);
  return mergedArray;
};
