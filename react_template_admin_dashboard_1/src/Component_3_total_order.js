import React from "react";
import Upward from"./Images/upward.png";
import { Button,Container,Dropdown, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar,Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Chart_line_total_order from "./Chart_line_total_order";
import './Component_3_total_order.css';
   
function Card() {
  return (
      <div id="component_3_total_order">
      <Row >
      <Col style={{marginLeft:"10px"}} >
      <br/>
      <h6  style={{fontSize:"15px",color:" rgb(20, 20, 20)"}} >
      Total Order
      </h6>   
      <a style={{fontSize:"32px",color:" rgb(129, 142, 146)"}} >
       58.4K <br/>
       <a className='sm-auto'> <img src={Upward} style={{height:"13px",width:"13px"}} /> 13.6% </a>  
      </a>
      </Col> 
      <Col style={{height:"150px"}}><Chart_line_total_order />
      </Col>
      </Row> 
      </div> 
  );
}
   
export default function Component_3_total_order() {
  return (
    <div>
      <Card />
      
    </div>
  );
}