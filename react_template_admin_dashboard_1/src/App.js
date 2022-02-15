import logo from './logo.svg';
import './App.css';
import { Col, Navbar, Row, Container , fluid} from 'reactstrap';
import Topnavbar from './Topnavbar';
import Component_1_sales from './Component_1_sales';
import Component_2_weather from './Component_2_weather';
import Component_3_total_order from './Component_3_total_order';
import Component_4_market_share from './Component_4_market_share';


function App() {
  return (
   <Container>
    <Row>
      <Topnavbar/>
    </Row>
    
      <Row>
        <Col md="6" sm="6">
           <Component_1_sales/>
        </Col>
        <Col md="6" sm="6" >
          <Component_2_weather/>
        </Col>
      </Row>
    <Row>
      <Col>
      <Component_3_total_order/>
      </Col>
      <Col>
      <Component_4_market_share/>
      </Col>
    </Row>
   </Container>
  );
}

export default App;
