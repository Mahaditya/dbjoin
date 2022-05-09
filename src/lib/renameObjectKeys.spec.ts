import test from 'ava';

import { renameObjectKeys } from './renameObjectKeys';

test('Rename Object Ideal Case', (t) => {
  const realValue = renameObjectKeys(
    { a: 'A', b: 'B', c: 'C' },
    {
      a: 1,
      b: ['sa'],
      c: '1',
    }
  );
  const expectedValue = {
    A: 1,
    B: ['sa'],
    C: '1',
  };
  t.deepEqual(realValue, expectedValue);
});

test('Rename Object With empty Objects',(t)=>{
    t.deepEqual(renameObjectKeys({},{}),{})
})