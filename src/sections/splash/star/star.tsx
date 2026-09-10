import styled from "styled-components";

type StarProps = {
  $x: number;
  $y: number;
  $size: number;
};

const StarDiv = styled.div<StarProps>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  position: absolute;
  top: ${props => props.$y}%;
  right: ${props => props.$x}%;
  border-radius: 100%; 
  background: #f1f1f1;
  z-index: 25;
`;

const Star = ({
  $x,
  $y,
  $size
}: StarProps) => {
  return (
    <StarDiv
      $x={$x}
      $y={$y}
      $size={$size}
    />
  );
};

export default Star;
