import test from 'ava';

import { leftJoinObject } from './leftJoinObject';

test('Left Join Object: Both Objects Present', (t) => {
  const realValue = leftJoinObject(
    {
      a: 1,
      b: 2,
      c: 3,
    },
    { d: 4, e: 5 },
    ['d', 'e']
  );
  const expectedValue = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  t.deepEqual(realValue, expectedValue);
});


test('Left Join Object: Right Object Missing', (t) => {
    const realValue = leftJoinObject(
      {
        a: 1,
        b: 2,
        c: 3,
      },
      undefined,
      ['d', 2]
    );
    const expectedValue = {
      a: 1,
      b: 2,
      c: 3,
      d: null,
      2: null,
    };
    t.deepEqual(realValue, expectedValue);
  });