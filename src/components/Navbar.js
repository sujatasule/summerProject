import React from 'react';
import logo from '../logo.PNG';
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
    DropdownItem } from 'reactstrap';

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
                <NavbarBrand href="/">
                <img src={logo} alt="logo" style={{width:'100px'}} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href='#'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Contact Us</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown> */}
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }


// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//             <a className="navbar-brand ml-5" href="#">
//                 <img src={logo} alt="logo" style={{width:'100px'}}/>
//             </a>
//         <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-toggle="collapse" 
//             data-target="#navbarSupportedContent" 
//             aria-controls="navbarSupportedContent" 
//             aria-expanded="false" 
//             aria-label="Toggle navigation">
    
//             <span className="navbar-toggler-icon">
//             </span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav m-auto">

//                 <li className="nav-item active">
//                     <a className="nav-link text-white text-uppercase mr-5" href="#">Home&nbsp;<i className="fas fa-home"></i><span className="sr-only">(current)</span></a>
//                 </li>

//                 <li className="nav-item">
//                     <a className="nav-link text-white text-uppercase mr-5" href="#">news</a>
//                 </li>

//                 <li className="nav-item">
//                     <a className="nav-link text-white text-uppercase mr-5" href="#">contact us</a>
//                 </li>
      
//             </ul>
//         </div>  
//         </nav>
//     );
// }

// export default Navbar;