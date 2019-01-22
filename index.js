import SCol from "./Col";
import SRow from "./Row";
import SpaceSheet from "./SpaceSheet";

const spaceSheet = new SpaceSheet();

export function Row(props) {
  const [view, spaces] = SpaceSheet.partition(props);

  return (
    <SRow {...view} style={[spaceSheet.getStyleSheet(spaces), view.style]} />
  );
}

export default function Col(props) {
  const [view, spaces] = SpaceSheet.partition(props);

  return (
    <SCol {...view} style={[spaceSheet.getStyleSheet(spaces), view.style]} />
  );
}
