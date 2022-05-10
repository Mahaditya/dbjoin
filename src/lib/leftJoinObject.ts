type RecordKeys = string | number | symbol;

export const leftJoinObject = <
  LeftKeys extends RecordKeys,
  LeftValues,
  RightKeys extends RecordKeys,
  RightValues
>(
  leftObject: Record<LeftKeys, LeftValues>,
  rightObject: Record<RightKeys, RightValues> | undefined,
  rightKeys: readonly RightKeys[]
) => {
  if (!rightObject) {
    const newObject = rightKeys.reduce((obj, key) => {
      return {
        ...obj,
        [key]: null,
      };
    }, {} as Record<RightKeys, null>);
    return {
      ...leftObject,
      ...newObject,
    };
  }

  return {
    ...leftObject,
    ...rightObject,
  };
};
