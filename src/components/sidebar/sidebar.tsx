import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 900px;
  border: 1px solid white;
  background-color: ${props => props.theme.colors.bg};
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      sidebar
    </SidebarContainer>
  );
};

export default Sidebar;
