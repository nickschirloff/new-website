import styled from "styled-components";
import ProjectsMenu from "./projects-menu/projects-menu";

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.fg};
  background-color: ${props => props.theme.colors.bg};
`;

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <ProjectsMenu />
    </SectionContainer>
  );
};

export default ProjectsSection;
