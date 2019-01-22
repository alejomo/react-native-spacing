import _mapKeys from 'lodash.mapkeys';

export default {
  sides: {
    '': '',
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    v: 'Vertical',
    h: 'Horizontal',
  },

  spacings: {
    m: 'margin',
    p: 'padding',
  },

  // "Double" spacing
  nextSize(spacing, index) {
    return spacing * Math.pow(2, index);
  },

  getSpacing(name) {
    return this.spacings[name.charAt(0)];
  },

  getSide(name) {
    // Need default for "m" or "p"
    return this.sides[name.charAt(1) || ''];
  },

  shorthand(shorthand, spacing) {
    const sides = {};

    switch (shorthand.length) {
      case 1:
        sides[''] = shorthand[0];
        break;

      case 2:
        sides['v'] = shorthand[0];
        sides['h'] = shorthand[1];
        break;

      case 3:
        sides['t'] = shorthand[0];
        sides['h'] = shorthand[1];
        sides['b'] = shorthand[2];
        break;

      case 4:
        sides['t'] = shorthand[0];
        sides['r'] = shorthand[1];
        sides['b'] = shorthand[2];
        sides['l'] = shorthand[3];
        break;

      default:
        break;
    }

    return _mapKeys(sides, (value, key) => `${spacing}${key}`);
  },
};
