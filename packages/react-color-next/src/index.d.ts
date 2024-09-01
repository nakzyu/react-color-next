export interface HEXColor {
  hex: string;
  source?: string | undefined;
}

export interface HSLColor {
  a?: number | undefined;
  h: number;
  l: number;
  s: number;
  source?: string | undefined;
}

export interface RGBColor {
  a?: number | undefined;
  b: number;
  g: number;
  r: number;
  source?: string | undefined;
}

export interface HSVColor {
  a?: number | undefined;
  h: number;
  s: number;
  v: number;
  source?: string | undefined;
}

export type Color = string | HEXColor | HSLColor | RGBColor | HSVColor;

export interface ColorState {
  hex: string;
  hsl: HSLColor;
  hsv: HSVColor;
  rgb: RGBColor;
  oldHue: number;
  source: string;
}

export interface RenderersProps {
  renderers?:
    | {
        canvas: any;
      }
    | undefined;
}

export type ColorChangeHandler<T = HSLColor | HSVColor | RGBColor> = (
  color: T
) => void;

export {
  default as AlphaPicker,
  AlphaPickerProps,
} from "./components/alpha/Alpha";
export {
  default as BlockPicker,
  BlockPickerProps,
} from "./components/block/Block";
export {
  default as ChromePicker,
  ChromePickerProps,
} from "./components/chrome/Chrome";
export {
  default as CirclePicker,
  CirclePickerProps,
} from "./components/circle/Circle";
export {
  default as Checkboard,
  CheckboardProps,
} from "./components/common/Checkboard";
export {
  default as CustomPicker,
  CustomPickerInjectedProps,
  CustomPickerProps,
} from "./components/common/ColorWrap";
export {
  default as CompactPicker,
  CompactPickerProps,
} from "./components/compact/Compact";
export {
  default as GithubPicker,
  GithubPickerProps,
} from "./components/github/Github";
export { default as HuePicker, HuePickerProps } from "./components/hue/Hue";
export {
  default as MaterialPicker,
  MaterialPickerProps,
} from "./components/material/Material";
export {
  default as PhotoshopPicker,
  PhotoshopPickerProps,
} from "./components/photoshop/Photoshop";
export {
  default as SketchPicker,
  SketchPickerProps,
} from "./components/sketch/Sketch";
export {
  default as SliderPicker,
  SliderPickerProps,
} from "./components/slider/Slider";
export {
  default as SwatchesPicker,
  SwatchesPickerProps,
} from "./components/swatches/Swatches";
export {
  default as TwitterPicker,
  TwitterPickerProps,
} from "./components/twitter/Twitter";
