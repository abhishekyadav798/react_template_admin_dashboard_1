import React,{Component,useState,useEffect} from "react";
import { Button,Container,Dropdown, Row,  Progress ,Col,Label,FormGroup,Input} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Flogo from"./Images/Flogo.png";
import './Component_6_project.css';
   
 function Card() {
   const[value1,finalvalue1] = useState("--")
   const[value2,finalvalue2] = useState("--")
   const[value3,finalvalue3] = useState("--")
   const[value4,finalvalue4] = useState("--")
   const[value5,finalvalue5] = useState("--")
   const[value6,finalvalue6] = useState("--")
   const[value7,finalvalue7] = useState("--")

   useEffect(()=>{
    const interval = setInterval(() => {
      button1();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button2();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button3();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button4();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button5();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button6();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      button7();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

   function button1(){
    finalvalue1(Math.floor(Math.random()*(100-40)))
  }

  function button2(){
    finalvalue2(Math.floor(Math.random()*(100-30)))
  }

  function button3(){
    finalvalue3(Math.floor(Math.random()*(100-20)))
  }

  function button4(){
    finalvalue4(Math.floor(Math.random()*(100-80)))
  }

  function button5(){
    finalvalue5(Math.floor(Math.random()*(100-90)))
  }

  function button6(){
    finalvalue6(Math.floor(Math.random()*(100-60)))
  }
  

  function button7(){
    finalvalue7(Math.floor(Math.random()*(100-55)))
  }
    return (
        <div id="component_6_project">
        <Row id="bar_top">
          <Col md="5" >
          <h6  id="bottom_link" >Running Projects</h6>
          </Col>
          <Col md="2">
          </Col>
          <Col md="5"  >
          <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Working Time</option>
            <option>Estimated Time</option>
            <option>Billable Time</option>
          </Input>
        </FormGroup>
            </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Falcon </a>
              <a  id="box" >{value1}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >01:20:30</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 3.8} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Harrier </a>
              <a  id="box" >{value2}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >12:50:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 5} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Safari </a>
              <a  id="box" >{value3}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >02:33:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 2} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Eagle </a>
              <a  id="box" >{value4}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >04:20:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 4.9} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />MHawk </a>
              <a  id="box" >{value5}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >08:40:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 8} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Neon </a>
              <a  id="box" >{value6}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >11:30:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 4} />
              </Col>
        </Row>
        <Row>
          <Col >
              <div>
              <a href="#" style={{textDecoration:"none"}} ><img src={Flogo} style={{height:"30px",width:"30px"}} />Louis </a>
              <a  id="box" >{value7}%</a> 
              </div>
              </Col>
              <Col>
              <a style={{color:"rgb(129, 142, 146)"}} >01:20:00</a>  
              </Col>
              <Col>
               <Progress  style={{height:"20%",marginTop:"13px",width:"80px"}} value={10 * 6} />
              </Col>
        </Row>
        <Row >
            <Col md="12" id="bottom_bar" >
             <a href='/' id="bottom_link" >Show all Projects</a>
            </Col>
        </Row>
        </div>  
    );
  }

export default function Component_6_running_projects() {
  return (
    <div>
      <Card />
      
    </div>
  );
}
   