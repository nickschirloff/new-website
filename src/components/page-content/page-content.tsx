import styled from "styled-components";
import FadeInTitle from "../text/fade-in-title";
import Sidebar from "../sidebar/sidebar";
import ContentPanel from "../content-panel/content-panel";

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content:
  max-height: 100%;
  min-height: 100%;
  padding: ${props => props.theme.spacing.xxl};
  gap: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  overflow: auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.med};
`;

const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};
`;

const PageContent = () => {
  return (
    <ContentContainer>
      <TitleContainer>
        <FadeInTitle fontSize={2.5} delay={0.5}>Greetings, Earthling.</FadeInTitle>
        <FadeInTitle fontSize={2.5} delay={2}>I'm Nick Schirloff.</FadeInTitle>
      </TitleContainer>
      <MainContentContainer>
        <Sidebar />
        <ContentPanel />
      </MainContentContainer>
    </ContentContainer>
  );
};

export default PageContent;
