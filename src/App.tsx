import './index.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import StarBackground from './components/star-background/star-background';
import PageContent from './components/page-content/page-content';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: auto;
`;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <StarBackground />
        <PageContent />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App
