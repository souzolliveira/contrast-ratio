import React from "react";

import styles from "./Text.module.scss";

const Text = ({ textColor, side }) => {
  return (
    <div
      className={`${styles.text} ${styles[side]}`}
      style={{ color: textColor }}
    >
      <div className={styles.content}>
        <h2>How to use</h2>
        <p>Contrast minimum (AA):</p>
        <ul>
          <li>
            The visual presentation of text must have a contrast ratio of at
            least 4.5:1.
          </li>
          <li>
            For large-scale <b>(with at least 18px or 14px bold)</b> the text
            must have a contrast ratio of at least 3:1.
          </li>
        </ul>
        <p>Contrast enhanced (AAA):</p>
        <ul>
          <li>
            The visual presentation of text must have a contrast ratio of at
            least 7:1.
          </li>
          <li>
            For large-scale <b>(with at least 18px or 14px bold)</b> the text
            must have a contrast ratio of at least 4.5:1.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Text;
