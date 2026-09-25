type WindowDimensions = {
  windowWidth: number;
  windowHeight: number;
};

export const useGetWindowDimensions = (): WindowDimensions => {
  const { 
    innerWidth: windowWidth,
    innerHeight: windowHeight,
  } = window;
  return {
    windowWidth,
    windowHeight,
  }
}