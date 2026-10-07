import styled from "styled-components";

type FadeInTitleProps = {
  children: React.ReactNode;
  fontSize?: number;
  delay?: number;
};

const FadeText = styled.p<{
  $delay: FadeInTitleProps["delay"];
  $fontSize: FadeInTitleProps["fontSize"];
}>`
  color: ${props => props.theme.colors.fg};
  font-size: ${props => props.$fontSize}rem;
  animation: fadeInOpacity 1s ease-in forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  @keyframes fadeInOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const FadeInTitle = ({
  children,
  fontSize,
  delay,
}: FadeInTitleProps) => {
  return (
    <FadeText $delay={delay || 1} $fontSize={fontSize || 1}>
      {children}
    </FadeText>
  );
};

export default FadeInTitle;
