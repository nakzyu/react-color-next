import merge from "lodash/merge";
import PropTypes from "prop-types";
import React from "react";
import reactCSS from "reactcss";

import { ColorWrap, Hue, Saturation } from "../common";
import GoogleFields from "./GoogleFields";
import GooglePointer from "./GooglePointer";
import GooglePointerCircle from "./GooglePointerCircle";

export const Google = ({
  width = 652,
  onChange = () => {},
  rgb = { r: 0, g: 0, b: 0 },
  hsl = { h: 0, s: 0, l: 0 },
  hsv = { h: 0, s: 0, v: 0 },
  hex = "#000000",
  header = "Color picker",
  styles: passedStyles = {},
  className = "",
}) => {
  const styles = reactCSS(
    merge(
      {
        default: {
          picker: {
            width,
            background: "#fff",
            border: "1px solid #dfe1e5",
            boxSizing: "initial",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "8px 8px 0px 0px",
          },
          head: {
            height: "57px",
            width: "100%",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "16px",
            fontSize: "20px",
            boxSizing: "border-box",
            fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
          },
          saturation: {
            width: "70%",
            padding: "0px",
            position: "relative",
            overflow: "hidden",
          },
          swatch: {
            width: "30%",
            height: "228px",
            padding: "0px",
            background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
            position: "relative",
            overflow: "hidden",
          },
          body: {
            margin: "auto",
            width: "95%",
          },
          controls: {
            display: "flex",
            boxSizing: "border-box",
            height: "52px",
            paddingTop: "22px",
          },
          color: {
            width: "32px",
          },
          hue: {
            height: "8px",
            position: "relative",
            margin: "0px 16px 0px 16px",
            width: "100%",
          },
          Hue: {
            radius: "2px",
          },
        },
      },
      passedStyles
    )
  );

  return (
    <div style={styles.picker} className={`google-picker ${className}`}>
      <div style={styles.head}>{header}</div>
      <div style={styles.swatch} />
      <div style={styles.saturation}>
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={GooglePointerCircle}
          onChange={onChange}
        />
      </div>
      <div style={styles.body}>
        <div style={styles.controls} className="flexbox-fix">
          <div style={styles.hue}>
            <Hue
              style={styles.Hue}
              hsl={hsl}
              radius="4px"
              pointer={GooglePointer}
              onChange={onChange}
            />
          </div>
        </div>
        <GoogleFields
          rgb={rgb}
          hsl={hsl}
          hex={hex}
          hsv={hsv}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  rgb: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
  }),
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
  }),
  hsv: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    v: PropTypes.number,
  }),
  hex: PropTypes.string,
  header: PropTypes.string,
  styles: PropTypes.object,
  className: PropTypes.string,
};

export default ColorWrap(Google);
