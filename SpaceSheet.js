import Sheet from './Sheet';
import DialSheet from './DialSheet';
import defaultStrategy from './strategy';

export default class SpaceSheet extends Sheet {
  sizes = [];
  strategy = {};
  isSpace = null;

  constructor(strategy = defaultStrategy) {
    super();

    this.strategy = strategy;

    const spacings = Object.keys(strategy.spacings).join('|');
    const sides = Object.keys(strategy.sides).join('|');

    this.isSpace = new RegExp(`^(${spacings})(${sides})?$`);
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

  getStyle({ ...props }, dir) {
    // Normalize input
    if (Array.isArray(props.m)) {
      Object.assign(props, this.strategy.shorthand(props.m, 'm'));
    }

    if (Array.isArray(props.p)) {
      Object.assign(props, this.strategy.shorthand(props.p, 'p'));
    }

    // Generate style
    const style = {};

    Object.keys(props)
      .filter(name => this.isSpace.test(name))
      .forEach(name => {
        const spacing = this.strategy.getSpacing(name);
        const side = this.strategy.getSide(name);
        const size = props[name];

        style[`${spacing}${side}`] = this.sizes.length
          ? this.sizes[size]
          : size;
      });

    return Object.assign(style, DialSheet.getStyle(props, dir));
  }

  getStyleSheet(props, dir) {
    return this.constructor.create(this.getStyle(props, dir));
  }

  partition({ ...view }) {
    const props = {};

    Object.keys(view).forEach(name => {
      if (this.isSpace.test(name) || DialSheet.isDial) {
        props[name] = view[name];

        delete view[name];
      }
    });

    return [view, props];
  }
}
