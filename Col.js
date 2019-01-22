import React from "react";
import { View } from "react-native";
//
import { getStyleSheet, partition } from "./dial";

export default function Col(props) {
  const [view, dial] = partition(props);
  const style = getStyleSheet(dial, "column");

  return <View {...view} style={[style, view.style]} />;
}
