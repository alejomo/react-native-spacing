import Sheet from './Sheet';
import defaultStrategy from './strategy';

export default class SpaceSheet extends Sheet {
  sizes = [];
  strategy = {};
  isAlias = null;

  constructor(strategy = defaultStrategy) {
    super();
    this.strategy = strategy;

    // Init
    const { spacings, sides } = strategy;

    this.isAlias = createTest(Object.keys(spacings), Object.keys(sides));
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
    if (Array.isArray(props.m)) {
      Object.assign(props, this.strategy.shorthand(props.m, 'm'));
    }

    if (Array.isArray(props.p)) {
      Object.assign(props, this.strategy.shorthand(props.p, 'p'));
    }

    // Generate style
    const style = {};

    Object.keys(props).forEach(name => {
      const size = props[name];
      let prop;

      if (this.isAlias.test(name)) {
        const spacing = this.strategy.getSpacing(name);
        const side = this.strategy.getSide(name);

        prop = `${spacing}${side}`;
      } else if (isStandard.test(name)) {
        prop = name;
      }

      if (prop) {
        style[prop] = this.sizes.length ? this.sizes[size] : size;
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
      if (this.isAlias.test(name) || isStandard.test(name)) {
        props[name] = view[name];

        delete view[name];
      }
    });

    return [view, props];
  }
}

const { spacings, sides } = defaultStrategy;
const isStandard = createTest(Object.values(spacings), Object.values(sides));

function createTest(spacings, sides) {
  return new RegExp(`^(${spacings.join('|')})(${sides.join('|')})?$`);
}
