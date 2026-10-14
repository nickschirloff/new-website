import styled from "styled-components";
import ContentBox from "../content-box";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
`;

const LinksEntry = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;

const LinkTitle = styled.p`

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const LinksBox = () => {
  const iconSize = 30;
  return (
    <ContentBox title="Links">
      <LinksContainer>
        <LinksEntry>
          <IconBrandGithub size={iconSize} cursor="pointer" />
          <LinkTitle>nickschirloff</LinkTitle>
        </LinksEntry>
        <LinksEntry>
          <IconBrandLinkedin size={iconSize} cursor="pointer" />
          <LinkTitle>Nick Schirloff</LinkTitle>
        </LinksEntry>
      </LinksContainer>
    </ContentBox>
  );
};

export default LinksBox;
