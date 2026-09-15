import styled from "styled-components";

type StarProps = {
  top: number;
  right: number;
  size?: number;
};

const StarDiv = styled.div<{
  $size: StarProps["size"];
  $top: StarProps["top"];
  $right: StarProps["right"];
  $animationDuration: number;
}>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  position: absolute;
  top: ${props => props.$top}%;
  right: ${props => props.$right}%;
  border-radius: 100%; 
  background: #f1f1f1;
  //animation: twinkle ${props => props.$animationDuration}s 0s linear infinite;
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
  right,
  size
}: StarProps) => {
  return (
    <StarDiv
      $size={size || 3}
      $top={top}
      $right={right}
      $animationDuration={(Math.random() * 5) + 3}
    />
  );
};

export default Star;
