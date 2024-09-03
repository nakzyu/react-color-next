import React, { isValidElement } from "react";
import reactCSS from "reactcss";
import * as checkboard from "../../helpers/checkboard";

export const Checkboard = ({
  white = "transparent",
  grey = "rgba(0,0,0,.08)",
  size = 8,
  renderers = {},
  borderRadius,
  boxShadow,
  children,
}) => {
  const styles = reactCSS({
    default: {
      grid: {
        borderRadius,
        boxShadow,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: `url(${checkboard.get(
          white,
          grey,
          size,
          renderers.canvas
        )}) center left`,
      },
    },
  });

  return isValidElement(children) ? (
    React.cloneElement(children, {
      ...children.props,
      style: { ...children.props.style, ...styles.grid },
    })
  ) : (
    <div style={styles.grid} />
  );
};

export default Checkboard;
