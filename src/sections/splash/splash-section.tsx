import styled from "styled-components";
import StarBackground from "./star-background/star-background";

const SectionContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${props => props.theme.heights.navbarHeight});
  display: flex;
  position: relative;
  background-color: ${props => props.theme.colors.bg};
`;

const StarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
`;

const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const FadeInText = styled.p<{ 
  $textSize: number;
  $duration: number 
}>`
  color: white;
  font-size: ${props => props.$textSize}rem;
  text-shadow: white 1px 0 10px;
  opacity: 1;
  // animation-name: fadeInOpacity;
  animation: fadeInOpacity 1s ease-in forwards;
  animation-iteration-count: 1;
  // animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-delay: ${props => props.$duration}s;
  opacity: 0;

  @keyframes fadeInOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1700px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const PageTransitionContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const SplashSection = () => {

  return (
    <SectionContainer>
      <StarBackground />
      {/* <StarContainer>
        {generateStars()}
      </StarContainer>
        <MainContentContainer>
          <TextContainer>
            <FadeInText $duration={0.5} $textSize={4.5}>Greetings, Earthling.</FadeInText>
            <FadeInText $duration={2.5} $textSize={4.5}>I'm Nick Schirloff.</FadeInText>
            <FadeInText $duration={4} $textSize={4.5}>Welcome to my website.</FadeInText>
          </TextContainer>
          <PageTransitionContainer>
            <FadeInText $duration={0.5} $textSize={1}>Learn More About Me</FadeInText>
            <FadeInText $duration={0.5} $textSize={1}>V</FadeInText>
          </PageTransitionContainer>
        </MainContentContainer> */}
    </SectionContainer>
  );
};

export default SplashSection;
