import React from "react";
import Upward from"./Images/upward.png";
import { Button,Container,Dropdown, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar,Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Chart_line_total_order from "./Chart_line_total_order";
import './Component_4_market_share.css';
import Chart_doughnut_market_share from "./Chart_doughnut_market_share";
   
function Card() {
  return (
      <div id="market_share">
      <Row >
      <Col style={{marginLeft:"10px"}}  >
      <br/><br/><br/>
        <h6  style={{fontSize:"15px",color:" rgb(20, 20, 20)",marginLeft:"27px"}} >
        Market Share
      </h6>   
      <a style={{fontSize:"25px",color:" rgb(129, 142, 146)",marginLeft:"27px"}} >
       58.4K <br/>
       <a className='sm-auto2'> <img src={Upward} style={{height:"13px",width:"13px"}} /> 13.6% </a>  
      </a>
      </Col> 
      <Col ><Chart_doughnut_market_share/>
      </Col>
      </Row> 
      </div> 
  );
}
   
export default function Component_4_market_share() {
  return (
    <div>
      <Card />
      
    </div>
  );
}