import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Speech from"./Images/speech.png";
import Bell from"./Images/bell.png";
import India from"./Images/india.png";
import Avatar from"./Images/avatar.png";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button,
    Form,
    Dropdown,
    FormGroup} from 'reactstrap';
export default class Topnavbar extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar light expand="md" className='navbar_brand'>
                <NavbarBrand href="/">Trident</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/Components_1_sales/"> Sales</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Components_2_weather">Weather</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem >
                        <a href="/" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"620px"}} src={Speech}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="/" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={Bell}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="/" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={India}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="#" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={Avatar}/>  </a> 
                    </NavItem>  
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
}