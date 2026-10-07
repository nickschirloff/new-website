import styled from "styled-components";
import Star from "./star/star";
import { useGetWindowDimensions } from "../../hooks/use-get-window-dimensions";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: ${props => props.theme.colors.bg};
`;

const StarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
`;

const StarBackground = () => {
  const { windowWidth } = useGetWindowDimensions();
  const screenSizePercentage = 0.03
  
  const generateStars = (): Array<React.ReactNode> => {
    const numStars = Math.floor(windowWidth * screenSizePercentage);
    let res: Array<React.ReactNode> = [];
    for (let i = 0; i < numStars; i++) {
      let ranTop = Math.floor(Math.random() * 99);
      let ranRight = Math.floor(Math.random() * 99);
      res.push(
        <Star
          key={`star-${i}`}
          top={ranTop}
          right={ranRight}
        />
      );
    }
    return res;
  };
  
  return (
    <BackgroundContainer>
      <StarContainer>
        {generateStars()}
      </StarContainer>
    </BackgroundContainer>
  );
};

export default StarBackground;
