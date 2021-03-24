import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Pattern,
  Use,
  Image,
  Stop,
  LinearGradient,
  Mask,
  Rect,
  Circle,
} from "react-native-svg";

export const MenuIcon = (props) => (
  <Svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.91 1.42H13V0H5.91v1.42zM0 6.71h13V5.29H0v1.42zM0 12h7.978v-1.42H0V12z"
      fill="#00544F"
    />
  </Svg>
)