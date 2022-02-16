import React from "react";
import Dots from"./Images/dots.png";
import { Button,Container, Row, Col,FormGroup,Label,Input} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component_9.css';
import Chart_bar from "./Chart_bar";
   
function Card() {
  return (
        
        <div id="component_12_file">    
        <Row id="top_style">
            <Col>
             <a>Top Products</a>
            </Col>
            <Col>
            </Col>  
        </Row>
        <Row>
            <Col >
            <Chart_bar/>
            </Col>    
        </Row>
        </div>
        
  );
}
   
export default function Component_12() {
  return (
    <div>
      <Card />  
    </div>
  );
}
