import React,{Component} from "react";
import { Button,Container,Dropdown, Row,  Progress ,Col,Label,FormGroup,Input} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Flogo from"./Images/Flogo.png";
import './Component_6_project.css';
   
export default class Component_6_running_projects extends React.Component {
  render() {
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
              <a  id="box" >38%</a> 
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
              <a  id="box" >50%</a> 
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
              <a  id="box" >20%</a> 
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
              <a  id="box" >49%</a> 
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
              <a  id="box" >80%</a> 
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
              <a  id="box" >40%</a> 
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
              <a  id="box" >60%</a> 
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
}
   