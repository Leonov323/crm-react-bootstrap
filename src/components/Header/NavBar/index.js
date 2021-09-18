import styled from 'styled-components';
import { Nav, Navbar, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap'

const Styled = styled.div`
    .navbar {
        background: black;
        height: 50px;
        border-bottom: 1px solid darkgreen;
        
        
    }
    .navbar-nav { 
        padding-right: 25px;
         background: black;
        @media (max-width: 993px) {
           
           z-index: 5;
           position: relative;
        }
    }
    .navbar-toggler {
      
        border: none;
    }
    .navbar-toggler:focus {
      box-shadow: 0 0 0 0rem;
        border: none;
    }
`

function NavBar() {
    return (
        <Styled>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Brand CRM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Users</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav >
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    className="me-3 border-success bg-black"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styled>
    );
}

export default NavBar;
