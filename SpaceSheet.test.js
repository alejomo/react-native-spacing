import SpaceSheet from './SpaceSheet';

const ss = new SpaceSheet();
ss.setSpacing(4);

test('margin', () => {
  const [, props] = ss.partition({ m: 3 });
  expect(ss.getStyle(props)).toHaveProperty('margin', 16);
});

test('padding', () => {
  const [, props] = ss.partition({ p: 3 });
  expect(ss.getStyle(props)).toHaveProperty('padding', 16);
});

test('top', () => {
  const [, props] = ss.partition({ mt: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginTop', 8);
});

test('right', () => {
  const [, props] = ss.partition({ mr: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginRight', 8);
});

test('bottom', () => {
  const [, props] = ss.partition({ mb: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginBottom', 8);
});

test('left', () => {
  const [, props] = ss.partition({ ml: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginLeft', 8);
});

test('vertical', () => {
  const [, props] = ss.partition({ mv: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginVertical', 8);
});

test('horizontal', () => {
  const [, props] = ss.partition({ mh: 2 });
  expect(ss.getStyle(props)).toHaveProperty('marginHorizontal', 8);
});

test('shorthand (1)', () => {
  const [, props] = ss.partition({ m: 4 });
  expect(ss.getStyle(props)).toHaveProperty('margin', 32);
});

test('shorthand (2)', () => {
  const [, props] = ss.partition({ m: [4, 1] });
  const result = ss.getStyle(props);

  expect(result).toHaveProperty('marginVertical', 32);
  expect(result).toHaveProperty('marginHorizontal', 4);
});

test('shorthand (3)', () => {
  const [, props] = ss.partition({ m: [4, 2, 1] });
  const result = ss.getStyle(props);

  expect(result).toHaveProperty('marginTop', 32);
  expect(result).toHaveProperty('marginHorizontal', 8);
  expect(result).toHaveProperty('marginBottom', 4);
});

test('shorthand (4)', () => {
  const [, props] = ss.partition({ m: [4, 2, 1, 1] });
  const result = ss.getStyle(props);

  expect(result).toHaveProperty('marginTop', 32);
  expect(result).toHaveProperty('marginRight', 8);
  expect(result).toHaveProperty('marginBottom', 4);
  expect(result).toHaveProperty('marginLeft', 4);
});
