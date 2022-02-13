import logo from './logo.svg';
import './App.css';
import { Col, Navbar, Row, Container , fluid} from 'reactstrap';
import Component_1_sales from './Component_1_sales';
import Component_2_weather from './Component_2_weather';
import Topnavbar from './Topnavbar';

function App() {
  return (
   <div>
   <Row>
        <Topnavbar/>
      </Row>
    <Container className="Container1" >
      
      <Row>
        <Col md="6" sm="6">
           <Component_1_sales/>
        </Col>
        <Col md="6" sm="6">
          <Component_2_weather/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
