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
                            <NavDropdown title="CreateNewUser" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
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
