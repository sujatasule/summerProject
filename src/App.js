import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BodyInput from './components/BodyInput';
import BodyDeck from './components/BodyDeck';


class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <BodyInput
      // // width={100%} 
      // name="event_id"
      // items={[
      //   {value: 'Events', id:1},
      //   {value: 'Place', id:2},
      //   {value: 'Time', id:3},
      // ]}
      />
      <BodyDeck />
    </div>
  );
  }
}

export default App;
