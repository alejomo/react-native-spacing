import React from 'react';
import { View } from 'react-native';
//
import DialSheet from './DialSheet';

export default function Col(props) {
  const [view, dial] = DialSheet.partition(props);
  const style = DialSheet.getStyleSheet(dial, 'column');

  return <View {...view} style={[style, view.style]} />;
}
