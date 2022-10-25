import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCamera = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M19.167 14.833A1.667 1.667 0 0 1 17.5 16.5h-15a1.667 1.667 0 0 1-1.667-1.667V5.667A1.667 1.667 0 0 1 2.5 4h3.333L7.5 1.5h5L14.167 4H17.5a1.667 1.667 0 0 1 1.667 1.667v9.166Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 13.167A3.333 3.333 0 1 0 10 6.5a3.333 3.333 0 0 0 0 6.667Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCamera;
