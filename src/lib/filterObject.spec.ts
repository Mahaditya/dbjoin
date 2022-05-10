import test from 'ava';

import { filterObject } from './filterObject';
import { renameObjectKeys } from './renameObjectKeys';

test('Testing Filter Object', (t) => {
  const realValue = filterObject(
    { a: 'A', d: '5', b: 'd' },
    { b: 'there', a: 3, d: '4', t: 'dog' }
  );
  const expectedValue = { a: 3, b: 'there', d: '4' };
  t.deepEqual(realValue, expectedValue);
});

test('Testing Filter and Rename Object', (t) => {
  const filterAndRename = renameObjectKeys(
    { a: 'A', d: 'D', b: 'B'},
    filterObject(
      { a: 'A', d: 'D', b: 'B' },
      { b: 'there', a: 3, d: '4', t: 'dog' }
    )
  );
  const expectedValue = { "A": 3, "B": 'there', "D": '4' };
  t.deepEqual(filterAndRename, expectedValue);
});
