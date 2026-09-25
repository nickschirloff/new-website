import { useState } from "react";
import styled from "styled-components";

const menuHeight = 650;
const MenuContainer = styled.div`
  width: 1250px;
  height: ${menuHeight}px;
  display: flex;
  border-radius: ${props => props.theme.borderRadius.lg};
  background-color: lightblue;
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid black;
  border-radius: ${props => props.theme.borderRadius.lg} 0 0 ${props => props.theme.borderRadius.lg};
  background-color: gray;
`;

const RightContainer = styled.div`
  width: 100%:
  height: 100%;
`;

const ProjectsMenu = () => {
  const [activeProject, setActiveProject] = useState<string>("");
  
  return (
    <MenuContainer>
      <LeftContainer>
        Left
      </LeftContainer>
      <RightContainer>
        Right
      </RightContainer>
    </MenuContainer>
  );
};

export default ProjectsMenu;
