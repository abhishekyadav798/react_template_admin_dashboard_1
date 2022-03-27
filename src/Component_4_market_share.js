import React,{useState,useEffect} from "react";
import Upsign from "./Images/upsign.png"
import Red_down from "./Images/red_down.png"
import {  Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Component_4_market_share.css';
import Chart_doughnut_market_share from "./Chart_doughnut_market_share";
   
function Card() {

  const [image,finalimage] = useState(Upsign)
  const[data, finaldata] =useState("--")
  const[percent,finalpercent] = useState("--")

  useEffect(()=>{
    const interval = setInterval(() => {
      button1();
    }, 3000);
    return () => clearInterval(interval);
  }, []); 

  useEffect(()=>{
    const interval = setInterval(()=> {
    button2();
  },2000);
  return ()=> clearInterval(interval);  
  },[])

  function button(){
    finalimage(Red_down)
  }

  function button1(){
    finaldata(Math.floor(Math.random()*(100-40)))
  }
  function button2(){
    finalpercent(Math.floor(Math.random()*(100-80)))
  }


  return (
      <div id="market_share">
        
      <Row >
      <Col style={{marginLeft:"10px"}}  >
      <br/><br/><br/>
        <h6  style={{fontSize:"15px",color:" rgb(20, 20, 20)"}} >
        Market Share
      </h6>   
      <a style={{fontSize:"32px",color:" rgb(129, 142, 146)"}} >
       {data}K <br/>
       <a className='sm-auto'> <img src={image} style={{height:"13px",width:"13px"}} /> {percent}% </a>  
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