import styled from "styled-components";

type StarProps = {
  top: number;
  right: number;
};

const StarDiv = styled.div<{
  $top: StarProps["top"];
  $right: StarProps["right"];
  $size: number;
  $animationDuration: number;
}>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  top: ${props => props.$top}%;
  right: ${props => props.$right}%;
  position: absolute;
  border-radius: 100%;
  background: #f1f1f1;
  animation-name: twinkle;
  animation-duration: ${props => props.$animationDuration}s;
  animation-iteration-count: infinite;

  @keyframes twinkle {
    0% {
      transform: scale(1, 1);
      background: rgba(255,255,255,0.0);
      animation-timing-function: ease-in;
    }
    60% {
      transform: scale(0.8, 0.8);
      background: rgba(255,255,255,1);
      animation-timing-function: ease-out;
    }
    80% {
      background: rgba(255,255,255,0.00);
      transform: scale(1, 1);
    }
    100% {
      background: rgba(255,255,255,0.0);
      transform: scale(1, 1);
    }
  }
`;

const Star = ({
  top,
  right
}: StarProps) => {
  const starSize = 3;
  const animationDuration = Math.floor((Math.random() * 5)) + 3;

  return (
    <StarDiv
      $top={top}
      $right={right}
      $size={starSize}
      $animationDuration={animationDuration}
    />
  );
};

export default Star;
