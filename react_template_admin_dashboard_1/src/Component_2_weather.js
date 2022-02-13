import React from "react";
import Weather from"./Images/weather.png";
import Dots from"./Images/dots.png";
import { Button,Container,Dropdown,Progress, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Card() {
    return (       
        <div className="Container">
        <Row>
            <Row>
            <Col>
                <div>
                <a  style={{textDecoration:"none",fontSize:"15px",color:" rgb(20, 20, 20)"}} >Weather </a> 
                </div>
                </Col>
                <Col>   
                </Col>
                <Col> <a href="#" ><img src={Dots} style={{height:"7px",width:"14px",marginLeft:"130px",border:"2px solid #555",}}/></a></Col>
            </Row>
            
            <Row>
            <Col style={{marginTop:"20px",marginLeft:"5px"}}>
                <div >
                <img src={Weather} style={{height:"63px",width:"63px"}} /> 
                </div>
            </Col>  
            <Col style={{marginTop:"20px",marginLeft:"5px"}}>
              <a style={{fontSize:"13px",color:" rgb(20, 20, 20)"}} >
              New York City <br/>
              <span style={{color:"red"}}> Sunny</span> <br/>
              <span style={{color:" rgb(129, 142, 146)"}}> Precipitation:50%</span>
              </a> 
            </Col>        
            <Col> 
             <a style={{color:"rgb(59, 200, 255)",marginTop:"26px",fontSize:"42px",fontWeight:"400"}}>31<sup>&deg;</sup></a>
             <a><br/><span>32<sup>&deg;</sup>/25<sup>&deg;</sup></span></a>
            </Col>
            </Row>
        </Row>
        </div>  
    );
  }
     
export default function Component_2_weather() {
    return (
      <div>
        <Card/>        
      </div>
    );
}