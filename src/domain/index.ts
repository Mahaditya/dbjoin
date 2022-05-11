export type RecordKeys = string | number | symbol;
export type RecordArray<A extends RecordKeys, B> = readonly Record<A, B>[];