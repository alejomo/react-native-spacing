import SpaceSheet from './SpaceSheet';

const spaceSheet = new SpaceSheet();
spaceSheet.setSpacing(4);

test('margin', () => {
  expect(spaceSheet.getStyle({ m: 3 })).toHaveProperty('margin', 16);
});

test('padding', () => {
  expect(spaceSheet.getStyle({ p: 3 })).toHaveProperty('padding', 16);
});

test('top', () => {
  expect(spaceSheet.getStyle({ mt: 2 })).toHaveProperty('marginTop', 8);
});

test('right', () => {
  expect(spaceSheet.getStyle({ mr: 2 })).toHaveProperty('marginRight', 8);
});

test('bottom', () => {
  expect(spaceSheet.getStyle({ mb: 2 })).toHaveProperty('marginBottom', 8);
});

test('left', () => {
  expect(spaceSheet.getStyle({ ml: 2 })).toHaveProperty('marginLeft', 8);
});

test('vertical', () => {
  expect(spaceSheet.getStyle({ mv: 2 })).toHaveProperty('marginVertical', 8);
});

test('horizontal', () => {
  expect(spaceSheet.getStyle({ mh: 2 })).toHaveProperty('marginHorizontal', 8);
});

test('shorthand (1)', () => {
  expect(spaceSheet.getStyle({ m: 4 })).toHaveProperty('margin', 32);
});

test('shorthand (2)', () => {
  const result = spaceSheet.getStyle({ m: [4, 1] });

  expect(result).toHaveProperty('marginVertical', 32);
  expect(result).toHaveProperty('marginHorizontal', 4);
});

test('shorthand (3)', () => {
  const result = spaceSheet.getStyle({ m: [4, 2, 1] });

  expect(result).toHaveProperty('marginTop', 32);
  expect(result).toHaveProperty('marginHorizontal', 8);
  expect(result).toHaveProperty('marginBottom', 4);
});

test('shorthand (4)', () => {
  const result = spaceSheet.getStyle({ m: [4, 2, 1, 1] });

  expect(result).toHaveProperty('marginTop', 32);
  expect(result).toHaveProperty('marginRight', 8);
  expect(result).toHaveProperty('marginBottom', 4);
  expect(result).toHaveProperty('marginLeft', 4);
});
