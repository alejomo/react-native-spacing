import React from 'react';
//
import SCol from './Col';
import SRow from './Row';
import SpaceSheet from './SpaceSheet';

const spaceSheet = new SpaceSheet();

export function Row(props) {
  const [rest, spaces] = spaceSheet.partition(props);
  const style = spaceSheet.getStyleSheet(spaces);

  return <SRow {...rest} style={[style, rest.style]} />;
}

export default function Col(props) {
  const [rest, spaces] = spaceSheet.partition(props);
  const style = spaceSheet.getStyleSheet(spaces);

  return <SCol {...rest} style={[style, rest.style]} />;
}
