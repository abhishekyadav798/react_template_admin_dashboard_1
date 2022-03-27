import React from 'react'
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Component_10_footer.css'

function Card () {
  return (
    <div id='component_15_footer'>
      <Row>
        <Col id='text_style'>
          <h6 style={{ color: 'rgb(0, 0, 0)' }}>Support</h6>
          <br />
          <a href='#' id='text_style'>
            Help
          </a>
          <br />
          <a href='#' id='text_style'>
            Advisories
          </a>
          <br />
          <a href='#' id='text_style'>
            Status
          </a>
          <br />
          <a href='#' id='text_style'>
            Contact npm
          </a>
        </Col>
        <Col id='text_style'>
          <h6 style={{ color: 'rgb(0, 0, 0)' }}>Company</h6>
          <br />
          <a href='#' id='text_style'>
            About
          </a>
          <br />
          <a href='#' id='text_style'>
            Blog
          </a>
          <br />
          <a href='#' id='text_style'>
            Press
          </a>
          <br />
        </Col>
        <Col id='text_style'>
          <h6 style={{ color: 'rgb(0, 0, 0)' }}>Terms & Policies</h6>
          <br />
          <a href='#' id='text_style'>
            Policies
          </a>
          <br />
          <a href='#' id='text_style'>
            Terms of Use
          </a>
          <br />
          <a href='#' id='text_style'>
            Code of Conduct
          </a>
          <br />
          <a href='#' id='text_style'>
            Privacy
          </a>
        </Col>
      </Row>
      <hr />
      <Row id='bottom_bar'>
        <Col>
          <a>
            Thank you for creating with Us | 2022 ©{' '}
            <span>
              <a href='https://github.com/abhishekyadav798/react_template_admin_dashboard_1'>Designed By Abhishek Yadav</a>
            </span>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default function Component_15_footer () {
  return (
    <div>
      <Card />
    </div>
  )
}
