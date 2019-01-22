import React from 'react';
import { View } from 'react-native';

const spaceSheet = new SpaceSheet();

export function Row(props) {
  const [view, spaces] = spaceSheet.partition(props);
  const style = spaceSheet.getStyleSheet(spaces, 'row');

  return <View {...view} style={[style, view.style]} />;
}

export default function Col(props) {
  const [view, spaces] = spaceSheet.partition(props);
  const style = spaceSheet.getStyleSheet(spaces, 'column');

  return <View {...view} style={[style, view.style]} />;
}
