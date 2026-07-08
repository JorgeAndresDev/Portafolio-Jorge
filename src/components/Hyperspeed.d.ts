interface EffectOptions {
  onSpeedUp?: () => void;
  onSlowDown?: () => void;
  distortion?: string;
  length?: number;
  roadWidth?: number;
  islandWidth?: number;
  lanesPerRoad?: number;
  fov?: number;
  fovSpeedUp?: number;
  speedUp?: number;
  carLightsFade?: number;
  totalSideLightSticks?: number;
  lightPairsPerRoadWay?: number;
  shoulderLinesWidthPercentage?: number;
  brokenLinesWidthPercentage?: number;
  brokenLinesLengthPercentage?: number;
  lightStickWidth?: number[];
  lightStickHeight?: number[];
  movingAwaySpeed?: number[];
  movingCloserSpeed?: number[];
  carLightsLength?: number[];
  carLightsRadius?: number[];
  carWidthPercentage?: number[];
  carShiftX?: number[];
  carFloorSeparation?: number[];
  colors?: {
    roadColor?: number;
    islandColor?: number;
    background?: number;
    shoulderLines?: number;
    brokenLines?: number;
    leftCars?: number[];
    rightCars?: number[];
    sticks?: number;
  };
}

interface HyperspeedProps {
  effectOptions?: EffectOptions;
}

declare const Hyperspeed: import('react').FC<HyperspeedProps>;
export default Hyperspeed;
