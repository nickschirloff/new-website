import styled from 'styled-components';
import './index.css';
import ProjectsSection from './sections/projects/projects-section';
import SplashSection from './sections/splash/splash-section';
import IntroSection from './sections/intro/intro-section';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: auto;
`;

function App() {

  return (
    <AppContainer>
      <SplashSection />
      <IntroSection />
      <ProjectsSection />
    </AppContainer>
  );
}

export default App
