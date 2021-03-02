import React, { useCallback } from "react";

import styles from "./CalculateButton.module.scss";

const CalculateButton = ({ hexColorOne, hexColorTwo, isHexColor }) => {
  const calculateX = useCallback((x) => {
    if (x <= 0.03928) return x / 12.92;
    return Math.pow((x + 0.055) / 1.055, 2.4);
  }, []);

  const calculateL = useCallback(
    (r, g, b) => {
      return (
        0.2126 * calculateX(r / 255) +
        0.7152 * calculateX(g / 255) +
        0.0722 * calculateX(b / 255)
      );
    },
    [calculateX]
  );

  const contrastRatio = useCallback(() => {
    const L1 = calculateL(
      parseInt(`${hexColorOne[1]}${hexColorOne[2]}`, 16),
      parseInt(`${hexColorOne[3]}${hexColorOne[4]}`, 16),
      parseInt(`${hexColorOne[5]}${hexColorOne[6]}`, 16)
    );
    const L2 = calculateL(
      parseInt(`${hexColorTwo[1]}${hexColorTwo[2]}`, 16),
      parseInt(`${hexColorTwo[3]}${hexColorTwo[4]}`, 16),
      parseInt(`${hexColorTwo[5]}${hexColorTwo[6]}`, 16)
    );
    let float;
    if (L1 > L2) float = parseFloat((L1 + 0.05) / (L2 + 0.05));
    else float = parseFloat((L2 + 0.05) / (L1 + 0.05));

    if ((float * 100).toFixed(0) % 100 === 0) float = float.toFixed(0);
    else if ((float * 100).toFixed(0) % 10 === 0) float = float.toFixed(1);
    else float = float.toFixed(2);

    return float;
  }, [calculateL, hexColorOne, hexColorTwo]);

  return (
    <div
      className={styles.calculateButton}
      style={
        !isHexColor
          ? { background: "white" }
          : contrastRatio() < 3
          ? { background: "#ff6666" }
          : contrastRatio() >= 3 && contrastRatio() < 7
          ? { background: "#f89924" }
          : { background: "#66b266" }
      }
    >
      <span>{isHexColor && contrastRatio()}</span>
    </div>
  );
};

export default CalculateButton;
