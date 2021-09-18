import { Container, Row, Col } from 'react-bootstrap'
import { Styled, List, Users, User } from './Main.styled.js'

const card = [<Users className="mt-3 mb-3 p-3 w-100"><p>#4</p><p>Email: sobaka123</p><p>Subscribe: PRO 18/09/2021 Untill: 18/09/2022</p></Users>,
              <Users className="mt-3 mb-3 p-3 w-100"><p>#3</p><p>Email: stalker123</p><p>Subscribe: Undefined</p></Users>,
              <Users className="mt-3 mb-3 p-3 w-100"><p>#2</p><p>Email: github.com/Leonov323</p><p>Subscribe: PROMEGAMAX 18/09/2021 Untill: 18/09/2022</p></Users>,
              <Users className="mt-3 mb-3 p-3 w-100"><p>#1</p><p>Email: danya.maestro@gmail.com</p><p>Subscribe: PROMEGAMAX 18/09/2021 Untill: 18/09/2022</p></Users>
            ]

function Main() {
  return (
    <Styled>
      <Container fluid>
        <Row>
          <Col lg={3} className="pt-4 pb-4">
              <User>
                <p>Email: sobaka123@gmail.com</p>
                <p>Password: Gladiator32!</p> 
                <p>Date of registration: 15/09/2021</p>            
                <p>Subscribed: 18/09/2021 <span>Untill: 18/09/2022</span></p>
                <p>Vertion: PRO</p>
              </User>
          </Col>
          <Col lg={9} className="pt-4 pb-4">  
            <List>
              {card}
              {card}
              {card}
            </List>
          </Col>
        </Row>
      </Container>
    </Styled>
  );
}

export default Main;
