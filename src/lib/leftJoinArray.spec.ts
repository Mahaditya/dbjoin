import test from 'ava';

import { leftJoinArray } from './leftJoinArray';

test('Left Join Array', (t) => {
  const real = leftJoinArray(
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
    ],['a']
  );

  t.log(real)

});
