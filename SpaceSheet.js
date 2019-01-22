import _mapKeys from 'lodash.mapkeys';
import _get from 'lodash.get';
//
import Sheet from './Sheet';
import defaultStrategy from './strategy';

export default class SpaceSheet extends Sheet {
  sizes = [];
  strategy = {};

  constructor(strategy = defaultStrategy) {
    super();
    this.strategy = strategy;
  }

  setSpacing(spacing, range = 5) {
    this.sizes = [];

    for (let index = 0; index < range; index++) {
      this.sizes.push(this.strategy.nextSize(spacing, index, range));
    }

    this.sizes.unshift(0);
  }

  setSizes(sizes) {
    this.sizes = sizes;
  }

  getStyle({ ...props }) {
    // Normalize input
    if (Array.isArray(props.margin)) {
      Object.assign(props, shorthand(props.margin, 'margin'));
    }

    if (Array.isArray(props.padding)) {
      Object.assign(props, shorthand(props.padding, 'padding'));
    }

    // Generate style
    const style = {};

    Object.keys(props).forEach(name => {
      const val = props[name];

      if (isSpace.test(name)) {
        style[name] = _get(this.sizes, val, val);
      } else {
        style[name] = val;
      }
    });

    return style;
  }

  getStyleSheet(props) {
    return this.constructor.create(this.getStyle(props));
  }

  partition({ ...view }) {
    const props = {};

    Object.keys(view).forEach(name => {
      const unalias = this.strategy.aliases[name];

      if (unalias) {
        props[unalias] = view[name];

        delete view[name];
      }
    });

    return [view, props];
  }
}

const spaceNames = Object.values(defaultStrategy.aliases);
const isSpace = new RegExp(`^(${spaceNames.join('|')})$`);

function shorthand(arr, spacing) {
  let sides;

  switch (arr.length) {
    case 2:
      sides = {
        Vertical: arr[0],
        Horizontal: arr[1],
      };
      break;

    case 3:
      sides = {
        Top: arr[0],
        Horizontal: arr[1],
        Bottom: arr[2],
      };
      break;

    case 4:
      sides = {
        Top: arr[0],
        Right: arr[1],
        Bottom: arr[2],
        Left: arr[3],
      };
      break;

    default:
      throw new Error(
        `Wrong react-native-spacing shorthand: [${arr.join(', ')}]`
      );
  }

  return _mapKeys(sides, (value, side) => `${spacing}${side}`);
}
