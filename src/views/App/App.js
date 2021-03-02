import React, { useEffect, useState } from "react";

import CalculateButton from "components/CalculateButton/CalculateButton";
import ColorOne from "components/ColorOne/ColorOne";
import ColorTwo from "components/ColorTwo/ColorTwo";

import styles from "./App.module.scss";

const App = () => {
  const [colorOne, setColorOne] = useState("#ffffff");
  const [colorTwo, setColorTwo] = useState("#850000");
  const [isHexColorOne, setIsHexColorOne] = useState(false);
  const [isHexColorTwo, setIsHexColorTwo] = useState(false);

  useEffect(() => {
    const regex = new RegExp("^#[0-9a-fA-F]{6}");
    if (colorOne.match(regex)) setIsHexColorOne(true);
    else setIsHexColorOne(false);
    if (colorTwo.match(regex)) setIsHexColorTwo(true);
    else setIsHexColorTwo(false);
  }, [colorOne, colorTwo]);

  return (
    <div id="app" className={styles.app}>
      <ColorOne
        colorOne={colorOne}
        setColorOne={setColorOne}
        isHexColorOne={isHexColorOne}
        isHexColorTwo={isHexColorTwo}
        colorTwo={colorTwo}
      />
      <CalculateButton
        hexColorOne={colorOne}
        hexColorTwo={colorTwo}
        isHexColor={isHexColorOne && isHexColorTwo}
      />
      <ColorTwo
        colorTwo={colorTwo}
        setColorTwo={setColorTwo}
        isHexColorTwo={isHexColorTwo}
        isHexColorOne={isHexColorOne}
        colorOne={colorOne}
      />
    </div>
  );
};

export default App;
