import styled from "styled-components";
import ContentBox from "../content-box";
import { IconMapPin } from "@tabler/icons-react";

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.med};
`;

const LocationBox = () => {
  return (
    <ContentBox title="Location">
      <ContentContainer>
        <IconMapPin size={30} />
        <p>Norman, OK</p>
      </ContentContainer>
    </ContentBox>
  );
};

export default LocationBox;
