import React,{useState,useEffect} from "react";
import Dots from"./Images/dots.png";
import Corpo1 from "./Images/corpo1.jpg";
import Thecorp from "./Images/thecorp.jpg";
import Dropwater from "./Images/dropwater.jpg";
import { Button,Container,Progress, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component_9_best_selling.css';
import { set } from "react-hook-form";
   
function Card() {

  const [value1,finalvalue1] = useState("--")
  const [value2,finalvalue2] = useState("--")
  const [value3,finalvalue3] = useState("--")
  const [revenue1,finalrevenue1] = useState("--")
  const [revenue2,finalrevenue2] = useState("--")
  const [revenue3,finalrevenue3] = useState("--")

  useEffect (()=>{
    const interval = setInterval(()=>{
      button1();
    },[2500]);
    return ()=> clearInterval(interval)
  },[])

  useEffect (()=>{
    const interval = setInterval(()=>{
      button2();
    },[1000]);
    return ()=> clearInterval(interval)
  },[])

  useEffect (()=>{
    const interval = setInterval(()=>{
      button3();
    },[2000]);
    return ()=> clearInterval(interval)
  },[])

  useEffect (()=>{
    const interval = setInterval(()=>{
      button4();
    },[1500]);
    return ()=> clearInterval(interval)
  },[])

  useEffect (()=>{
    const interval = setInterval(()=>{
      button5();
    },[3000]);
    return ()=> clearInterval(interval)
  },[])

  useEffect (()=>{
    const interval = setInterval(()=>{
      button6();
    },[2000]);
    return ()=> clearInterval(interval)
  },[])

  function button1(){
    finalvalue1(Math.floor(Math.random()*(100-50)))
  }

  function button2(){
    finalvalue2(Math.floor(Math.random()*(100-20)))
  }
  function button3(){
    finalvalue3(Math.floor(Math.random()*(100-20)))
  }

  function button4(){
    finalrevenue1(Math.floor(Math.random()*(1000-20)))
  }

  function button5(){
    finalrevenue2(Math.floor(Math.random()*(2000-20)))
  }

  function button6(){
    finalrevenue3(Math.floor(Math.random()*(500-10)))
  }
  return (
        <div id="component_9_best_selling" >
         
          <Row >
        <Row >
            <Col>
             <a style={{fontSize:"15px",color:" rgb(20, 20, 20)",fontWeight:600}}>Best Selling Products</a>
            </Col>
            <Col>
            <a style={{fontSize:"15px",color:" rgb(20, 20, 20)",fontWeight:600}}>Revenue($3333)</a>
            </Col>
            <Col style={{fontSize:"15px",color:" rgb(20, 20, 20)",fontWeight:600}}>
            <a>Revenue (%)</a>
            </Col>
        </Row>
        <Row>
            <Col md="1">
            <img src={Corpo1} style={{height:"45px",width:"58px"}} />
            </Col>
            <Col md="3" style={{marginLeft:"13px"}}>
            <a>Raven Pro</a><br/>
            <a style={{color:"rgb(129, 142, 146)"}}>Landing</a>
            </Col>
            <Col md="4">
            <a style={{color:"rgb(110, 113, 114)"}}>${revenue1}</a>
            </Col>
            <Col>
            <Progress  style={{height:"12%",marginTop:"13px",width:"80px"}} value={10 * 5} />
            </Col>
            <Col><a>{value1}%</a></Col>
        </Row>
        <Row>
            <Col md="1">
            <img src={Dropwater} style={{height:"45px",width:"58px"}} />
            </Col>
            <Col md="3" style={{marginLeft:"13px"}}>
            <a>Boots4</a><br/>
            <a style={{color:"rgb(129, 142, 146)"}}>Portfolio</a>
            </Col>
            <Col md="4">
            <a style={{color:"rgb(110, 113, 114)"}}>${revenue2}</a>
            </Col>
            <Col>
            <Progress  style={{height:"12%",marginTop:"13px",width:"80px"}} value={10 * 3} />
            </Col>
            <Col><a>{value2}%</a></Col>
        </Row>
        <Row>
            <Col md="1">
            <img src={Thecorp} style={{height:"45px",width:"58px"}} />
            </Col>
            <Col md="3" style={{marginLeft:"13px"}}>
            <a>Falcon</a><br/>
            <a style={{color:"rgb(129, 142, 146)"}}>Admin</a>
            </Col>
            <Col md="4">
            <a style={{color:"rgb(110, 113, 114)"}}>${revenue3}</a>
            </Col>
            <Col>
            <Progress  style={{height:"12%",marginTop:"13px",width:"80px"}} value={10 * 7} />
            </Col>
            <Col><a>{value3}%</a></Col>
        </Row>
        </Row>
        </div>
    
  );
}
   
export default function component_9_best_selling() {
  return (
    <div>
      <Card />  
    </div>
  );
}
