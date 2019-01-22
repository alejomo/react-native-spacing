import Sheet from './Sheet';

export default class DialSheet extends Sheet {
  static isDial = new RegExp(
    `^(${['dial', 'flex', 'space', 'stretch', 'reverse', 'color'].join('|')})$`
  );

  static partition({ ...view }) {
    const props = {};

    Object.keys(view).forEach(name => {
      if (this.isDial.test(name)) {
        props[name] = view[name];

        delete view[name];
      }
    });

    return [view, props];
  }

  static getStyleSheet(props, dir) {
    return this.create(this.getStyle(props, dir));
  }

  static getStyle({ dial, flex, space, stretch, reverse, color }, dir) {
    if (dial && (dial < 1 || dial > 9)) {
      throw new TypeError('`dial` prop must be between 1 and 9');
    }

    // Main-axis
    let justifyContent;

    if (space) {
      justifyContent = `space-${space}`;
    } else if (dial) {
      justifyContent = dir === 'row' ? dialX(dial) : dialY(dial);
    } else {
      // undefined
    }

    // Cross-axis
    let alignItems;

    if (stretch) {
      alignItems = 'stretch';
    } else if (dial) {
      alignItems = dir === 'row' ? dialY(dial) : dialX(dial);
    } else {
      // undefined
    }

    return {
      flex: flex === true ? 1 : flex,
      justifyContent,
      alignItems,
      flexDirection: reverse ? `${dir}-reverse` : dir,
      // FIXME: Extra
      backgroundColor: color,
    };
  }
}

function dialX(dial) {
  if (dial % 3 === 0) return 'flex-end';

  if (dial % 3 === 2) return 'center';

  return 'flex-start';
}

function dialY(dial) {
  if (dial > 6) return 'flex-end';

  if (dial > 3) return 'center';

  return 'flex-start';
}
