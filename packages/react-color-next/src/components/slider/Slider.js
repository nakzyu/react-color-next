import merge from "lodash/merge";
import PropTypes from "prop-types";
import React from "react";
import reactCSS from "reactcss";

import { ColorWrap, Hue } from "../common";
import SliderPointer from "./SliderPointer";
import SliderSwatches from "./SliderSwatches";

export const Slider = ({
  hsl,
  onChange,
  pointer = SliderPointer,
  styles: passedStyles = {},
  className = "",
}) => {
  // Check if hsl and onChange are provided
  if (!hsl || !onChange) {
    console.error("Required props `hsl` and `onChange` are missing.");
    return null;
  }

  const styles = reactCSS(
    merge(
      {
        default: {
          wrap: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
          },
          hue: {
            height: "12px",
            position: "relative",
          },
          Hue: {
            radius: "2px",
          },
          swatches: {
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          },
        },
      },
      passedStyles
    )
  );

  return (
    <div style={styles.wrap} className={`slider-picker ${className}`}>
      <div style={styles.hue}>
        <Hue
          style={styles.Hue}
          hsl={hsl}
          pointer={pointer}
          onChange={onChange}
        />
      </div>
      <div style={styles.swatches}>
        <SliderSwatches hsl={hsl} onClick={onChange} />
      </div>
    </div>
  );
};

Slider.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
  }),
  onChange: PropTypes.func,
  pointer: PropTypes.elementType,
  styles: PropTypes.object,
  className: PropTypes.string,
};

export default ColorWrap(Slider);
