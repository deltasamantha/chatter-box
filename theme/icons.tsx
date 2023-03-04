import {createIcon} from "native-base";
import React from "react";
import {Path} from "react-native-svg";

export const BackIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      d="M13.0666 3.76375L6.43395 10.3964L5.58039 11.25H6.7875H21.5V12.75H6.7875H5.58192L6.43363 13.6032L13.0557 20.2372L12 21.2929L2.70711 12L12.0012 2.70586L13.0666 3.76375Z"
      fill="currentColor"
      stroke="currentColor"
    />
  ),
});

export const ChevronRight = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      fill="currentColor"
      d="M6.5 3.77141L14.8785 12.0027L6.50268 20.2314L8.30293 22L18.5 12L8.30293 2L6.5 3.77141Z"
    />
  ),
});

export const ChevronLeft = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      fill="currentColor"
      d="M18.5 3.77141L10.1215 12.0027L18.4973 20.2314L16.6971 22L6.5 12L16.6971 2L18.5 3.77141Z"
    />
  ),
});
