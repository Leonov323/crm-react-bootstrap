import styled from 'styled-components';
import NavBar from './NavBar';

const Styled = styled.header`
height: 50px;
width: 100%;
background: black;
`

function Header() {
  return (
    <Styled>
        <NavBar />
    </Styled>
  );
}

export default Header;
