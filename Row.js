import React from 'react';
import { View } from 'react-native';
//
import DialSheet from './DialSheet';

export default function Row(props) {
  const [view, dial] = DialSheet.partition(props);
  const style = DialSheet.getStyleSheet(dial, 'row');

  return <View {...view} style={[style, view.style]} />;
}
