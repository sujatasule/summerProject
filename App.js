import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <Body
      // width={100%} 
      name="event_id"
      items={[
        {value: 'Events', id:1},
        {value: 'Place', id:2},
        {value: 'Time', id:3},
      ]}
      />
    </div>
  );
  }
}

export default App;
