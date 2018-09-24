import React from "react";
import { View as RNView } from "react-native";
import { getMargin, getPadding, getFlexbox } from "./utils/getSpacing";
import createStyleSheet from "./utils/createStyleSheet";

export default function View({
  margin,
  padding,
  dial = 0,
  flex,
  space,
  stretch,
  reverse,
  ...props
}) {
  const style = Object.assign(
    {},
    getMargin(margin),
    getPadding(padding),
    getFlexbox("column", dial, flex, space, stretch, reverse)
  );

  return <RNView {...props} style={[createStyleSheet(style), props.style]} />;
}
