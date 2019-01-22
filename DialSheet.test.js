import DialSheet from './DialSheet';

test('Dial (Row)', () => {
  let style;

  // Dial 1
  style = DialSheet.getStyle({ dial: 1 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 2
  style = DialSheet.getStyle({ dial: 2 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 3
  style = DialSheet.getStyle({ dial: 3 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 4
  style = DialSheet.getStyle({ dial: 4 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 5
  style = DialSheet.getStyle({ dial: 5 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 6
  style = DialSheet.getStyle({ dial: 6 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 7
  style = DialSheet.getStyle({ dial: 7 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'flex-end');

  // Dial 8
  style = DialSheet.getStyle({ dial: 8 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'flex-end');

  // Dial 9
  style = DialSheet.getStyle({ dial: 9 }, 'row');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'flex-end');
});

test('Dial (Column)', () => {
  let style;

  // Dial 1
  style = DialSheet.getStyle({ dial: 1 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 2
  style = DialSheet.getStyle({ dial: 2 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 3
  style = DialSheet.getStyle({ dial: 3 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-start');
  expect(style).toHaveProperty('alignItems', 'flex-end');

  // Dial 4
  style = DialSheet.getStyle({ dial: 4 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 5
  style = DialSheet.getStyle({ dial: 5 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 6
  style = DialSheet.getStyle({ dial: 6 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'center');
  expect(style).toHaveProperty('alignItems', 'flex-end');

  // Dial 7
  style = DialSheet.getStyle({ dial: 7 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'flex-start');

  // Dial 8
  style = DialSheet.getStyle({ dial: 8 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'center');

  // Dial 9
  style = DialSheet.getStyle({ dial: 9 }, 'column');

  expect(style).toHaveProperty('justifyContent', 'flex-end');
  expect(style).toHaveProperty('alignItems', 'flex-end');
});
