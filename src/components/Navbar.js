import React from 'react';
import './Navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
} from 'reactstrap';

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
              <Navbar className="navbar" color="dark" dark expand="md">
                <NavbarBrand className="navbar-brand" href="/">
                EventFinder
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="navlink" href='#'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="navlink" href="#">Contact Us</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }
