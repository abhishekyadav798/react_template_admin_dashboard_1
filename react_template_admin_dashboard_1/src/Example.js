import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Speech from"./Images/speech.png";
import Bell from"./Images/bell.png";
import India from"./Images/india.png";
import Avatar from"./Images/avatar.jpg";

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
    export default class Example extends React.Component {
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
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <Form className="d-flex">
              <FormGroup
               type="search"
                placeholder="Search"
                className="me-2"
                 aria-label="Search"
                   />
                  <Button variant="outline-success">Search</Button>
                   </Form>
                   <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Main Menu
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
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">GitHub</NavLink>
                    </NavItem>
                    <NavItem >
                        <a href="#" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"420px"}} src={Speech}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="#" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={Bell}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="/" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={India}/></a> 
                    </NavItem>
                    <NavItem >
                        <a href="#" > <img style={{ width:"20px",height:"20px",marginTop:"10px",marginLeft:"20px"}} src={Avatar}/>  </a> 
                        {/* <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Main Menu
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
                    </UncontrolledDropdown> */}
                    
                    </NavItem>
                   
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }