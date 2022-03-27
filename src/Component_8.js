import React from "react";
import { Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component_8.css'
   
function Card() {
  return (
      
      <div id="design">
      <Row>
          <Col style={{fontSize:"23px",color:" rgb(243, 85, 23)",fontWeight:"400"}} >Running out of your space?</Col>
          <br/><br/>
          <a style={{fontSize:"13px",color:" rgb(129, 142, 146)",}}>Your storage will be running out soon. Get more space and powerful productivity features.</a>
          <br/><br/>
          <a href="#" style={{fontSize:"16px",color:" rgb(243, 85, 23)",fontWeight:"400"}}>Upgrade Storage</a>
      </Row> 
      </div>
          
  );
}
   
export default function Component_8() {
  return (
    <div>
      <Card />  
    </div>
  );
}