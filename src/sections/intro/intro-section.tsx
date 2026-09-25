import styled from "styled-components";
import IntroBackground from "./intro-background/intro-background";

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const InfoSection = styled.div`
  
`;

const IntroSection = () => {
  return (
    <SectionContainer>
      <IntroBackground />
    </SectionContainer>
  );
};

export default IntroSection;
