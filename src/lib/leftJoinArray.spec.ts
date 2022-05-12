import test from 'ava';

import { leftJoinArray } from './leftJoinArray';

test('Left Join Array', (t) => {
  const realValue = leftJoinArray(
    [
      {
        a: '1',
        b: '2',
        c: '3',
      },
      {
        a: '2',
        b: '3',
        c: '4',
      },
    ],
    [
      {
        a: '1',
        g: '5',
        h: '6',
      },
      {
        a: '3',
        g: '7',
        h: '8',
      },
    ],
    ['a']
  );

  const expectedValue = [
    {
      a: '1',
      b: '2',
      c: '3',
      g: '5',
      h: '6',
    },
    {
      a: '2',
      b: '3',
      c: '4',
      g: null,
      h: null,
    },
  ];
  t.deepEqual(realValue, expectedValue);
});

test('Left Join Array - Multi Join', (t) => {
  const realValue = leftJoinArray(
    [
      {
        a: '1',
        b: '2',
        c: '3',
      },
      {
        a: '2',
        b: '3',
        c: '4',
      },
    ],
    [
      {
        a: '1',
        g: '5',
        h: '6',
      },
      {
        a: '2',
        g: '7',
        h: '8',
      },
      {
        a: '2',
        g: '9',
        h: '10',
      },
    ],
    ['a']
  );

  const expectedValue = [
    {
      a: '1',
      b: '2',
      c: '3',
      g: '5',
      h: '6',
    },
    {
      a: '2',
      b: '3',
      c: '4',
      g: '7',
      h: '8',
    },
    {
      a: '2',
      b: '3',
      c: '4',
      g: '9',
      h: '10',
    },
  ];
  t.deepEqual(realValue, expectedValue);
});
