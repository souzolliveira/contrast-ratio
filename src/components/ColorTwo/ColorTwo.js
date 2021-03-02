import React from "react";

import Text from "components/Text/Text";

import styles from "./ColorTwo.module.scss";

const ColorTwo = ({
  colorTwo,
  setColorTwo,
  isHexColorTwo,
  isHexColorOne,
  colorOne,
}) => {
  return (
    <div
      className={styles.colorTwo}
      style={isHexColorTwo ? { background: colorTwo } : {}}
    >
      {isHexColorOne && <Text textColor={colorOne} side="right" />}
      <input
        style={
          isHexColorTwo
            ? { border: "3px solid #66b266" }
            : { border: "3px solid #ff6666" }
        }
        value={colorTwo}
        type="text"
        maxLength={7}
        className={styles.inputTwo}
        onChange={(e) => setColorTwo(e.target.value)}
      />
    </div>
  );
};

export default ColorTwo;
