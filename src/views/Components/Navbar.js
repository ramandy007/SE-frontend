import React, { Component } from 'react';


import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

class Navbars extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        
            <Navbar color="info" light expand="md" className="Navbar" >
              <NavbarBrand href="/">EMS</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#/components/navbars">Components</NavLink>
                  </NavItem>
                  
                  <UncontrolledDropdown nav inNavbar>
                    {/*Warning: React does not recognize the `inNavbar` prop on a DOM element.*/}
                    {/*waiting for reactstrap@5.0.0-alpha.5*/}
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                       Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Logout
                      </DropdownItem>
                     
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
         
       
      </div>
    );
  }
}

export default Navbars;