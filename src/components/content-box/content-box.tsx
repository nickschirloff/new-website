import styled from "styled-components";

type ContentBoxProps = {
  children?: React.ReactNode;
  title: string;
}

const ContentBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${props => props.theme.padding.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.med};
  border: 1px solid white;
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.fg};
  background-color: ${props => props.theme.colors.bg};
`;

const ContentBoxTitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8px;
  border-bottom: 1px solid lightgray;
`;

const ContentBoxTitle = styled.h3`
  color: ${props => props.theme.colors.fg};
`;

const ContextBox = ({ 
  children,
  title 
}: ContentBoxProps) => {
  return (
    <ContentBoxContainer>
      <ContentBoxTitleContainer>
        <ContentBoxTitle>{title}</ContentBoxTitle>
      </ContentBoxTitleContainer>
      {children}
    </ContentBoxContainer>
  );
};

export default ContextBox;
