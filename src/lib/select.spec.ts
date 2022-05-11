import test from 'ava';

import { select } from './select';

test('Testing Select-General', (t) => {
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
