import styled from "styled-components";
import ContentBox from "../content-box";
import { IconBriefcase } from "@tabler/icons-react";

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.med};
`;

const WorkStatusBox = () => {
  return (
    <ContentBox title="Work Status">
      <ContentContainer>
        <IconBriefcase size={30} />
        <p>Open to Work</p>
      </ContentContainer>
    </ContentBox>
  );
};

export default WorkStatusBox;
