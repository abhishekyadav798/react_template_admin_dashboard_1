import React,{useState,useEffect} from "react";

import Upsign from "./Images/upsign.png"
import Red_down from "./Images/red_down.png"
import { Button,Container,Dropdown, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar,Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Chart_line_total_order from "./Chart_line_total_order";
import './Component_3_total_order.css';
   
function Card() {
  const [initial, finalvalue] = useState(Upsign);
  const [value,finaldata] = useState("--")
  const [percent,finalpercent] = useState("--")

  useEffect(() => {
    const interval = setInterval(() => {
      button();
    }, 3000);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      button1();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      button2();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function button(){
    finalvalue(Red_down)
  }

  function button1(){
    finaldata(Math.floor(Math.random()*(100-50)))
  }

  function button2(){
    finalpercent(Math.floor(Math.random()*(80-50)))
  }






  return (
      <div id="component_3_total_order">
       
      <Row >
      <Col style={{marginLeft:"10px"}} >
      <br/>
      <h6  style={{fontSize:"15px",color:" rgb(20, 20, 20)"}} >
      Total Order
      </h6>   
      <a style={{fontSize:"32px",color:" rgb(129, 142, 146)"}} >
       {value}K <br/>
       <a className='sm-auto'> <img src={initial} style={{height:"13px",width:"13px"}} /> {percent}% </a>  
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