import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.heights.navbarHeight};
  background-color: ${props => props.theme.colors.bg2};
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <p>Nick Schirloff</p>
    </NavbarContainer>
  );
};

export default Navbar;
