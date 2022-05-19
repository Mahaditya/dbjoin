export type RecordKeys = string | number | symbol;
export type RecordArray<A extends RecordKeys, B> = readonly Record<A, B>[];

export type Rows<T> = readonly Row<T>[];
export type Columns<T> = keyof Row<T>;
export type Keys<A> = keyof A;
export type Values<A> = A[Keys<A>];

export type Row<T> = T extends
  | string
  | boolean
  | number
  | null
  | undefined
  | readonly unknown[]
  | readonly []
  ? never
  : Record<Keys<T>, Values<T>>;

export type Common<A, B> = {
  readonly [P in keyof A & keyof B]: A[P] | B[P];
};
