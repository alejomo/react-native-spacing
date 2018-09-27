import _pick from "lodash.pick";
import _pickBy from "lodash.pickby";
import _mapKeys from "lodash.mapkeys";
//
import {
  getSize,
  marginPropNames,
  paddingPropNames,
  spacingProps
} from "../../config";

export function filterViewProps(props) {
  return _pickBy(props, (val, name) => !spacingProps[name]);
}

export function getStyle(props, dir = "column") {
  return Object.assign(
    getSpacing(props),
    getFlexbox(dir, props),
    getUtils(props)
  );
}

function getUtils({ color }) {
  return {
    backgroundColor: color
  };
}

function getSpacing(props) {
  const margin = filterSides(props, marginPropNames);
  const padding = filterSides(props, paddingPropNames);

  return Object.assign(
    getSpacingType("margin", margin),
    getSpacingType("padding", padding)
  );
}

function getSpacingType(type, sides) {
  // Process shorthand notation (if any)
  let shorthand = sides[""];

  if (shorthand) {
    if (typeof shorthand === "string") {
      shorthand = shorthand.split(" ");
    } else if (typeof shorthand === "number") {
      shorthand = [shorthand];
    } else {
      // Array
    }

    switch (shorthand.length) {
      case 1:
        sides[""] = shorthand[0];
        break;

      case 2:
        sides["v"] = shorthand[0];
        sides["h"] = shorthand[1];
        break;

      case 3:
        sides["t"] = shorthand[0];
        sides["h"] = shorthand[1];
        sides["b"] = shorthand[2];
        break;

      case 4:
        sides["t"] = shorthand[0];
        sides["r"] = shorthand[1];
        sides["b"] = shorthand[2];
        sides["l"] = shorthand[3];
        break;

      default:
        throw new TypeError(
          `Invalid ${type} shorthand notation: ${shorthand.join(", ")}`
        );
        break;
    }
  }

  // Build RN style
  const style = {};

  if (sides[""]) style[type] = getSize(sides[""]);

  if (sides.t) style[`${type}Top`] = getSize(sides.t);

  if (sides.r) style[`${type}Right`] = getSize(sides.r);

  if (sides.b) style[`${type}Bottom`] = getSize(sides.b);

  if (sides.l) style[`${type}Left`] = getSize(sides.l);

  if (sides.v) style[`${type}Vertical`] = getSize(sides.v);

  if (sides.h) style[`${type}Horizontal`] = getSize(sides.h);

  return style;
}

function getFlexbox(dir, { dial = 0, flex, space, stretch, reverse }) {
  dial = parseInt(dial, 10);

  if (isNaN(dial) || dial < 0 || dial > 10) {
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

function filterSides(props, propNames) {
  return _mapKeys(_pick(props, propNames), (val, key) => key.substring(1));
}
