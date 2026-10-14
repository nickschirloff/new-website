import styled from "styled-components";
import ContentSection from "./conent-section/content-section";

const PanelContainer = styled.div`
  width: 1250px;
  min-widath: 1250px;
  height: 900px;
  padding: ${props => props.theme.padding.lg};
  border: 1px solid white;
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.fg};
  background-color: ${props => props.theme.colors.bg};
`;

const ContentPanel = () => {
  return (
    <PanelContainer>
      <ContentSection title="About Me">
        Hi there. My name is Nick Schirloff, and I'm a software developer.
      </ContentSection>
    </PanelContainer>
  );
};

export default ContentPanel;
