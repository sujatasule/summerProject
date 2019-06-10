import React from 'react';
// import './Body.css';
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

  
  export default class Body extends React.Component {
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


// class Body extends React.Component {
//     state = {
//         ...this.props,
//         items:this.props.items || [],
//         showItems: false,
//         selectedItem: this.props.items && this.props.items[0],
//     }

//     dropDown = () => {
//         this.setState(prevState => ({
//             showItems: !prevState.showItems,
//         }))
//     }


//     selectItem = (item) => this.setState({
//         selectedItem: item,
//         showItems: false,
//     })

//     render() {
//         return <div>

//         <div className="container">
//             <input type="text" className="form-control-input" placeholder="Search" />
        
//             <div className="select-box--box"
//             style={{width: this.state.width || 150}}
//             >

//             <div className="select-box--container">

//             <div className="select-box--selected-item">
//             {this.state.selectedItem.value}
//             </div>

//             <div className="select-box--arrow"
//                 onClick={this.dropDown}>
//                 <span className={`${this.state.showItems ? 'select-box--arrow-up': 'select-box--arrow-down'}`} />
//             </div>

//             <div style={{display: this.state.showItems ? 'block': 'none'}}
//                 className="select-box--items"
//             >
//             {
//                 this.state.items.map(item => 
//             <div key={item.id} 
//                 onClick={() => this.selectItem(item)}
//                 className={this.state.selectedItem === item ? 'selected' : ''}
//             >
//                 {item.value}
//             </div>)
//             }   
//             </div>
//             </div>  
//             </div>
//             <input type="hidden" value={this.state.selectedItem.id} name={this.state.name} />
//             </div>
//             </div>

// }
// }


//     render() {
//     return (
//         <div className="input-group">
//             <input type="text" className="form-control mr-sm-2" placeholder="Search" aria-label="Text input with dropdown button" />
//         <div className="input-group-append">
//             <button className="btn btn-outline-secondary dropdown-toggle my-2 my-sm-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
//         <div className="dropdown-menu">
//             <a className="dropdown-item" href="#">Action</a>
//             <a className="dropdown-item" href="#">Another action</a>
//             <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//         </div>
//         </div>
//     );
//     }
// }


// export default Body;