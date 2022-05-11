type RecordKeys = string | number | symbol;

export function leftJoinObject<
  LeftKeys extends RecordKeys,
  LeftValues,
  RightKeys extends RecordKeys,
  RightValues
>(
  leftObject: Record<LeftKeys, LeftValues>,
  rightObject: Record<RightKeys, RightValues>,
  rightKeys: readonly RightKeys[]
): Record<LeftKeys, LeftValues> & Record<RightKeys, RightValues>;

export function leftJoinObject<
  LeftKeys extends RecordKeys,
  LeftValues,
  RightKeys extends RecordKeys
>(
  leftObject: Record<LeftKeys, LeftValues>,
  rightObject: null,
  rightKeys: readonly RightKeys[]
): Record<LeftKeys, LeftValues> & Record<RightKeys, null>;

export function leftJoinObject<
  LeftKeys extends RecordKeys,
  LeftValues,
  RightKeys extends RecordKeys,
  RightValues
>(
  leftObject: Record<LeftKeys, LeftValues>,
  rightObject: Record<RightKeys, RightValues> | null,
  rightKeys: readonly RightKeys[]
) {
  if (!rightObject) {
    const newObject = rightKeys.reduce((obj, key) => {
      return {
        ...obj,
        [key]: null,
      };
    }, {} as Record<RightKeys, null>);
    return {
      ...newObject,
      ...leftObject,
    };
  }

  return {
    ...leftObject,
    ...rightObject,
  };
}
