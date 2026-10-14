import styled from "styled-components";

type PanelProps = {
  title: string;
  children?: React.ReactNode;
};

const SectionContainer = styled.div`
  width: 100%;
  height: fitContent;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.med};
`;

const ContentSection = ({ 
  title,
  children
}: PanelProps) => {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
};

export default ContentSection;
