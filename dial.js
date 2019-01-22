import SpaceSheet from "./SpaceSheet";

const propNames = ["dial", "flex", "space", "stretch", "reverse", "color"];

export function partition({ ...view }) {
  const props = {};

  propNames.forEach(name => {
    props[name] = view[name];

    delete view[name];
  });

  return [view, props];
}

export function getStyle(props, dir) {
  return Object.assign({}, getFlexboxStyle(props, dir), getUtilsStyle(props));
}

export function getStyleSheet(props, dir) {
  return SpaceSheet.create(getStyle(props, dir));
}

function getFlexboxStyle({ dial = 0, flex, space, stretch, reverse }, dir) {
  if (isNaN(dial) || dial < 1 || dial > 9) {
    throw new TypeError("`dial` parameter must be between 1 and 9");
  }

  // Main-axis
  let justifyContent;

  if (space) {
    justifyContent = `space-${space}`;
  } else if (dial > 0) {
    justifyContent = dir === "row" ? dialX(dial) : dialY(dial);
  } else {
    // undefined
  }

  // Cross-axis
  let alignItems;

  if (stretch) {
    alignItems = "stretch";
  } else if (dial > 0) {
    alignItems = dir === "row" ? dialY(dial) : dialX(dial);
  } else {
    // undefined
  }

  return {
    flex: flex === true ? 1 : flex,
    justifyContent,
    alignItems,
    flexDirection: reverse ? `${dir}-reverse` : dir
  };
}

function getUtilsStyle({ color }) {
  return {
    backgroundColor: color
  };
}

function dialX(dial) {
  if (dial % 3 === 0) return "flex-end";

  if (dial % 3 === 2) return "center";

  return "flex-start";
}

function dialY(dial) {
  if (dial > 6) return "flex-end";

  if (dial > 3) return "center";

  return "flex-start";
}
