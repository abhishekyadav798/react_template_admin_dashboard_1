import React,{Component} from "react";
import { Container, Row,  Progress ,Col} from 'reactstrap';
import './Component_7_storage.css'
   
export default class Component_7_storage extends React.Component {
  render() {
    return (
      
        <div id="style">
        <Row >
          <Col >
              <div>
              <a  style={{color:"rgb(129, 142, 146)"}} >Using Storage <span style={{color:"rgb(0, 0, 0)"}} > 1775.06 MB</span> of 2 GB </a>
              <Progress multi  style={{height:"12px",marginTop:"9px"}}>
              <Progress bar value="15" />
              <Progress bar color="success" value="30" />
              <Progress bar color="info" value="25" />
              </Progress>
              </div>
          </Col>
        </Row>
        </div>
         
    );
  }
}