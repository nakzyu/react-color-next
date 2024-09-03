import merge from "lodash/merge";
import PropTypes from "prop-types";
import React from "react";
import reactCSS from "reactcss";

export const Raised = ({
  zDepth = 1,
  radius = 2,
  background = "#fff",
  children,
  styles: passedStyles = {},
}) => {
  // 기본 스타일을 설정합니다.
  const defaultStyles = {
    wrap: {
      position: "relative",
      display: "inline-block",
    },
    content: {
      position: "relative",
    },
    bg: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      boxShadow: `0 ${zDepth}px ${zDepth * 4}px rgba(0,0,0,.24)`,
      borderRadius: radius,
      background,
    },
  };

  // zDepth에 따라 스타일을 설정합니다.
  const depthStyles = {
    0: { boxShadow: "none" },
    1: { boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)" },
    2: { boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)" },
    3: {
      boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)",
    },
    4: {
      boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)",
    },
    5: { boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)" },
  };

  const shapeStyles = {
    square: { borderRadius: "0" },
    circle: { borderRadius: "50%" },
  };

  // `zDepth`에 해당하는 그림자 스타일을 선택합니다.
  const depthStyle = depthStyles[zDepth] || depthStyles[1];

  // `styles`를 설정합니다.
  const styles = reactCSS(
    merge(
      {
        default: {
          ...defaultStyles,
          bg: {
            ...defaultStyles.bg,
            ...depthStyle,
          },
        },
        shape: shapeStyles, // shape에 따른 스타일을 추가합니다.
      },
      passedStyles
    )
  );

  return (
    <div style={styles.wrap}>
      <div style={styles.bg} />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.number,
  styles: PropTypes.object,
};

export default Raised;
