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
      
      <Row id="component_1_sales">
      <Col sm="4">
      <h6 style={{fontSize:"15px",color:" rgb(20, 20, 20)",margin:"0px"}} >
          Weekly Sales <img src={Help} style={{height:"13px",width:"13px"}} />
      </h6>
        
      <a style={{fontSize:"32px",color:" rgb(129, 142, 146)",marginLeft:"10px"}} >
       $47K <br/>
      <a className='sm-auto' style={{color:" rgb(45, 160, 35)",marginLeft:"1px",marginBottom:"0px",backgroundColor:"rgb(168, 247, 207)",borderRadius:"15px",border:"none",padding:"8px",textDecoration:"none",fontSize:"11px",fontWeight:"800"}} >+3.5% </a> 
      </a>
      </Col>
      <Col sm="3">
      </Col>      
      <Col sm="4" style={{color:" rgb(20, 20, 20)",marginTop:"22px"}} sm="4"><BarChart1/> </Col>
      <Col sm="1"></Col>
      </Row> 
    
  );
}
   
export default function Component_1_sales() {
  return (
    <div>
      <Card/>  
    </div>
  );
}