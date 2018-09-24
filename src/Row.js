import React from "react";
import { View } from "react-native";
import { getMargin, getPadding, getFlexbox } from "./utils/getSpacing";
import createStyleSheet from "./utils/createStyleSheet";

export default function Row({
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
    getFlexbox("row", dial, flex, space, stretch, reverse)
  );

  return <View {...props} style={[createStyleSheet(style), props.style]} />;
}
