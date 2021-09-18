import styled from 'styled-components';

const FooterStyled = styled.footer`
height: 25px;
width: 100%;
background: black;
color: white;
text-align: center;
letter-spacing: 20px;
`

function Footer() {
  return (
        <FooterStyled>
            <h6>CRM</h6>
        </FooterStyled>
  );
}

export default Footer;
