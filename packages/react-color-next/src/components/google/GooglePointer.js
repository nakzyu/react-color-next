import PropTypes from "prop-types";
import React from "react";
import reactCSS from "reactcss";

export const GooglePointer = ({
  hsl = { h: 249.94, s: 0.5, l: 0.2, a: 1 },
}) => {
  const styles = reactCSS({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: `hsl(${Math.round(hsl.h)}, 100%, 50%)`,
        border: "2px white solid",
      },
    },
  });

  return <div style={styles.picker} />;
};

GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number,
  }),
};

export default GooglePointer;
