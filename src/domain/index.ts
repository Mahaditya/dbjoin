export type RecordKeys = string | number | symbol;
export type RecordArray<A extends RecordKeys, B> = readonly Record<A, B>[];
export type Rows<T> = readonly Row<T>[]
export type Columns<T>  = keyof Row<T>
export type Keys<A> = keyof A;
export type Values<A> = A[Keys<A>];

export type Row<T> = T extends
  | string
  | boolean
  | number
  | null
  | undefined
  | readonly unknown[]
  ? never
  : T;