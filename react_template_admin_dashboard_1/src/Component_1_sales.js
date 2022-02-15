import React from "react";
import { Button,Container,Dropdown, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import './Component_1_sales.css';
import Help from"./Images/help.png";
import BarChart1 from"./Barchart1";
   
function Card() {
  return (
       <div id="component_1_sales">
      <Row >
      <Col sm="4">
        <br/>
      <h6 style={{fontSize:"15px",color:" rgb(20, 20, 20)",marginLeft:"59px"}} >
          Weekly Sales <img src={Help} style={{height:"13px",width:"13px"}} />
      </h6>
        
      <a style={{fontSize:"25px",color:" rgb(129, 142, 146)",marginLeft:"59px"}} >
       $47K <br/>
      <a id='sm-auto' >+3.5% </a> 
      </a>
      <br/>
      
      </Col>
      <Col sm="3">
      </Col>      
      <Col sm="4" style={{color:" rgb(20, 20, 20)",marginTop:"22px"}} sm="4"><BarChart1/> </Col>
      <Col sm="1"></Col>
      </Row>
      </div> 
    
  );
}
   
export default function Component_1_sales() {
  return (
    <div>
      <Card/>  
    </div>
  );
}