import styled from "styled-components";

const PanelContainer = styled.div`
  width: 1250px;
  min-widath: 1250px;
  height: 900px;
  border: 1px solid white;
`;

const ContentPanel = () => {
  return (
    <PanelContainer>
      panel
    </PanelContainer>
  );
};

export default ContentPanel;
