import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    accessibilityRole="image"
    {...props}
  >
    <Path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
  </Svg>
);
export default SvgArrowLeft;
