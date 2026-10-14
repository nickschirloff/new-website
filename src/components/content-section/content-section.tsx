import styled from "styled-components";

type ContentSectionProps = {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionTitlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding.med};
  border-bottom: 1px solid gray;
`;

const ContentTitle = styled.p``;

const ContentSubtitle =  styled.p``;

const ContentSection = ({
  children,
  title,
  subtitle,
}: ContentSectionProps) => {
  return (
    <SectionContainer>
      <SectionTitlesContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>{subtitle}</ContentSubtitle>
      </SectionTitlesContainer>
      {children}
    </SectionContainer>
  );
};

export default ContentSection;
