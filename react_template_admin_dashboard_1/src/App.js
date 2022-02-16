import logo from './logo.svg';
import './App.css';
import { Col, Navbar, Row, Container , fluid} from 'reactstrap';
import Topnavbar from './Topnavbar';
import Component_1_sales from './Component_1_sales';
import Component_2_weather from './Component_2_weather';
import Component_3_total_order from './Component_3_total_order';
import Component_4_market_share from './Component_4_market_share';
import Component_5_totalsales from './Component_5_totalsales';
import Component_6_running_projects from './Component_6_running_projects';
import Component_7_storage from './Component_7_storage';
import Component_8 from './Component_8';
import Component_9 from './Component_9';
import Component_10_footer from './Component_10_footer';


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
    <Row>
      <Col>
      <Component_5_totalsales/>
      </Col>
      <Col>
      <Component_6_running_projects/>
      </Col>
    </Row>
    <Row>
      <Col>
      <Component_7_storage/>
      </Col>
      <Col>
      <Component_8/>
      </Col>
    </Row>
    <Row>
      <Col>
      <Component_9/>
      </Col>
    </Row>
    <Row>
      <Col>
      <Component_10_footer/>
      </Col>
    </Row>
   </Container>
  );
}

export default App;
