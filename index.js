import SCol from "./Col";
import SRow from "./Row";

const spaceSheet = new SpaceSheet();

export function Row(props) {
  const [view, spaces] = spaceSheet.partition(props);

  return (
    <SRow {...view} style={[spaceSheet.getStyleSheet(spaces), view.style]} />
  );
}

export default function Col(props) {
  const [view, spaces] = spaceSheet.partition(props);

  return (
    <SCol {...view} style={[spaceSheet.getStyleSheet(spaces), view.style]} />
  );
}
