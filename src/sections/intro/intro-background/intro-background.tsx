import styled from "styled-components";

const UpperPath = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;  
  top: 0;
  left: 0;  
  background-color: ${props => props.theme.colors.bg};
  clip-path: polygon(0 0, 100% 0, 0 15%);
`;

const LowerPath = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100;
  left: 0;
  background-color: ${props => props.theme.colors.bg};
  clip-path: polygon(0 100%, 100% 100%, 0 85%);
`;

const IntroBackground = () => {
  return (
    <>
      <UpperPath />
      <LowerPath />
    </>
  );
};

export default IntroBackground;
