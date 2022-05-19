import test from 'ava';

import { select } from './select';

test('Testing Select-One Join', (t) => {
  const real = select({
    customers: {
      _id: '_id',
      a: 'A',
      b: 'B',
      c: 'C',
    },
    customers_experts: {
      _id: '_id',
      a: 'A',
      g: 'G',
    },
  })
    .from('customers', [
      {
        _id: 'x',
        a: '1',
        b: '2',
        c: '3',
      },
      {
        _id: 'y',
        a: '1',
        b: '2',
        c: '3',
      },
    ])
    .leftJoin('customers_experts', [
      {
        _id: 'x',
        a: '1',
        g: '2',
      },
    ])
    .on(['_id'])
    .end();

  const expected = [
    {
      A: '1',
      B: '2',
      C: '3',
      G: '2',
      _id: 'x',
    },
    {
      A: '1',
      B: '2',
      C: '3',
      G: null,
      _id: 'y',
    },
  ];

  t.deepEqual(real, expected);
});

test('Testing Select-Two Joins', (t) => {
  const real = select({
    customers: {
      _id: '_id',
      a: 'A',
      b: 'B',
      c: 'C',
    },
    customers_experts: {
      _id: '_id',
      a: 'A',
      g: 'G',
    },
    customers_addresses: {
      _id: '_id',
      t: 'T',
      u: 'U',
    },
  })
    .from('customers', [
      {
        _id: 'x',
        a: '1',
        b: '2',
        c: '3',
      },
      {
        _id: 'y',
        a: '1',
        b: '2',
        c: '3',
      },
    ])
    .leftJoin('customers_experts', [
      {
        _id: 'x',
        a: '3',
        g: '2',
      },
    ])
    .on(['_id'])
    .leftJoin('customers_addresses', [
      {
        _id: 'x',
        t: '$',
        u: '^',
      },
    ])
    .on(['_id'])
    .end();

  t.log(real);

  const expected = [
    {
      A: '3',
      B: '2',
      C: '3',
      G: '2',
      T: '$',
      U: '^',
      _id: 'x',
    },
    {
      A: '1',
      B: '2',
      C: '3',
      G: null,
      T: null,
      U: null,
      _id: 'y',
    },
  ];

  t.deepEqual(real, expected);
});

test('Testing Select-One Join With Interface', (t) => {
  // eslint-disable-next-line functional/prefer-type-literal
  interface Customer {
    readonly _id: string;
    readonly a: string;
    readonly b: string;
    readonly c: string;
  }

  const customers: readonly Customer[] = [
    {
      _id: 'x',
      a: '1',
      b: '2',
      c: '3',
    },
    {
      _id: 'y',
      a: '1',
      b: '2',
      c: '3',
    },
  ];

  const real = select({
    customers: {
      _id: '_id',
      a: 'A',
      b: 'B',
      c: 'C',
    },
    customers_experts: {
      _id: '_id',
      a: 'A',
      g: 'G',
    },
  })
    .from('customers', customers)
    .leftJoin('customers_experts', [
      {
        _id: 'x',
        a: '1',
        g: '2',
      },
    ])
    .on(['_id'])
    .end();
  const expected = [
    {
      A: '1',
      B: '2',
      C: '3',
      G: '2',
      _id: 'x',
    },
    {
      A: '1',
      B: '2',
      C: '3',
      G: null,
      _id: 'y',
    },
  ];

  t.deepEqual(real, expected);
});
