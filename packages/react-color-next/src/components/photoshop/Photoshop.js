import merge from "lodash/merge";
import PropTypes from "prop-types";
import React, { useState } from "react";
import reactCSS from "reactcss";

import { ColorWrap, Hue, Saturation } from "../common";
import PhotoshopButton from "./PhotoshopButton";
import PhotoshopFields from "./PhotoshopFields";
import PhotoshopPointer from "./PhotoshopPointer";
import PhotoshopPointerCircle from "./PhotoshopPointerCircle";
import PhotoshopPreviews from "./PhotoshopPreviews";

const Photoshop = ({
  width = "513px",
  header = "Color Picker",
  styles: passedStyles = {},
  className = "",
  onChange,
  onAccept,
  onCancel,
  hsl,
  hsv,
  rgb,
  hex,
}) => {
  const [currentColor, setCurrentColor] = useState(hex);

  const styles = reactCSS(
    merge(
      {
        default: {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width,
          },
          head: {
            backgroundImage:
              "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow:
              "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center",
          },
          body: {
            padding: "15px 15px 0",
            display: "flex",
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden",
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
          },
          controls: {
            width: "180px",
            marginLeft: "10px",
          },
          top: {
            display: "flex",
          },
          previews: {
            width: "60px",
          },
          actions: {
            flex: "1",
            marginLeft: "20px",
          },
        },
      },
      passedStyles
    )
  );

  return (
    <div style={styles.picker} className={`photoshop-picker ${className}`}>
      <div style={styles.head}>{header}</div>

      <div style={styles.body} className="flexbox-fix">
        <div style={styles.saturation}>
          <Saturation
            hsl={hsl}
            hsv={hsv}
            pointer={PhotoshopPointerCircle}
            onChange={onChange}
          />
        </div>
        <div style={styles.hue}>
          <Hue
            direction="vertical"
            hsl={hsl}
            pointer={PhotoshopPointer}
            onChange={onChange}
          />
        </div>
        <div style={styles.controls}>
          <div style={styles.top} className="flexbox-fix">
            <div style={styles.previews}>
              <PhotoshopPreviews rgb={rgb} currentColor={currentColor} />
            </div>
            <div style={styles.actions}>
              <PhotoshopButton label="OK" onClick={onAccept} active />
              <PhotoshopButton label="Cancel" onClick={onCancel} />
              <PhotoshopFields
                onChange={onChange}
                rgb={rgb}
                hsv={hsv}
                hex={hex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number,
  }),
  hsv: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    v: PropTypes.number,
  }),
  rgb: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
    a: PropTypes.number,
  }),
  hex: PropTypes.string,
};

export default ColorWrap(Photoshop);
