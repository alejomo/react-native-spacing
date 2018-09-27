import React from "react";
import { View } from "react-native";
import { getColStyle, filterViewProps } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function Col(props) {
  const style = getColStyle(props);
  const viewProps = filterViewProps(props);

  return (
    <View {...viewProps} style={[createStyleSheet(style), viewProps.style]} />
  );
}
