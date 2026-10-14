import styled from "styled-components";
import LinksBox from "../content-box/links-box/links-box";
import LocationBox from "../content-box/location-box/location-box";
import WorkStatusBox from "../content-box/work-status-box/work-status-box";

const SidebarContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 900px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinksBox />
      <LocationBox />
      <WorkStatusBox />
    </SidebarContainer>
  );
};

export default Sidebar;
