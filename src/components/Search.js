import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';


  export default class Search extends React.Component {
    constructor(props) {
      super(props);

      this.toggleDropDown = this.toggleDropDown.bind(this);
      this.toggleSplit = this.toggleSplit.bind(this);
      this.state = {
        dropdownOpen: false,
        splitButtonOpen: false
      };
    }

    toggleDropDown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    toggleSplit() {
      this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
      });
    }

    render() {
        return (
          <div>
            <br>
            </br>
            <InputGroup>
              <Input type="text" placeholder="type here to search"/>
              <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                  Search by
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Events</DropdownItem>
                  <DropdownItem href="#">Place</DropdownItem>
                  <DropdownItem href="#">Date</DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem> */}
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
          </div>
        );
      }
    }
