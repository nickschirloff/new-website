import { useState } from "react";
import styled from "styled-components";
import { getWindowDimensions } from "../../utils/get-window-dimensions";
import Star from "./star/star";

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  background-color: #1E1E1E;
  z-index: -1;
`;

const SectionText = styled.p`
  color: white;
`;

const SplashSection = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  const generateStars = (): Array<React.ReactNode> => {
    const numStars = 40;
    const res: Array<React.ReactNode> = [];
    const { width, height } = windowDimensions;
    console.log(`Screen Size: ${width},${height}`);

    for (let i = 0; i < numStars; i++) {
      let ranX = Math.floor(Math.random() * 99);
      let ranY = Math.floor(Math.random() * 99);
      console.log(`Generated: ${ranX}, ${ranY}`);
      res.push(
        <Star 
          $x={ranX}
          $y={ranY}
          $size={3}
        />
      );
    }

    return res;
  };

  return (
    <SectionContainer>
        {generateStars()}
    </SectionContainer>
  );
};

export default SplashSection;
