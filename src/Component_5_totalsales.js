import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chart_line_total_sales from './Chart_line_total_sales'
import './Component_5_totalsales.css'

function Card () {
  return (
    <div id='component_5_totalsales'>
      <Row id='top_row'>
        <Col md='7'>
          <h6
            style={{
              fontSize: '15px',
              color: ' rgb(20, 20, 20)',
              padding: '5px'
            }}
          >
            {' '}
            Total Sales
          </h6>
        </Col>
        <Col></Col>
        <Col md='3'>
          <FormGroup id='form_style'>
            <Input type='select' name='select' id='exampleSelect'>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md='1'></Col>
        <Row>
          <Col>
            <Chart_line_total_sales />
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default function component_5_totalsales () {
  return (
    <div>
      <Card />
    </div>
  )
}
