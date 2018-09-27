import React from "react";
import { View as RNView } from "react-native";
import { getStyle, filterViewProps } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function View(props) {
  const style = getStyle(props);
  const viewProps = filterViewProps(props);

  return (
    <RNView {...viewProps} style={[createStyleSheet(style), viewProps.style]} />
  );
}
