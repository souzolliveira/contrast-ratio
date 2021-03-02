import React from "react";

import Text from "components/Text/Text";

import styles from "./ColorOne.module.scss";

const ColorOne = ({
  colorOne,
  setColorOne,
  isHexColorOne,
  isHexColorTwo,
  colorTwo,
}) => {
  return (
    <div
      className={styles.colorOne}
      style={isHexColorOne ? { background: colorOne } : {}}
    >
      {isHexColorTwo && <Text textColor={colorTwo} side="left" />}
      <input
        style={
          isHexColorOne
            ? { border: "3px solid #66b266" }
            : { border: "3px solid #ff6666" }
        }
        value={colorOne}
        type="text"
        maxLength={7}
        className={styles.inputOne}
        onChange={(e) => setColorOne(e.target.value)}
      />
    </div>
  );
};

export default ColorOne;
