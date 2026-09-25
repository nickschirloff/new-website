import styled, { ThemeProvider } from 'styled-components';
import './index.css';
import ProjectsSection from './sections/projects/projects-section';
import SplashSection from './sections/splash/splash-section';
import IntroSection from './sections/intro/intro-section';
import { theme } from './theme';
import Navbar from './components/navbar/navbar';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: auto;
`;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <SplashSection />
        <IntroSection />
        <ProjectsSection />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App
