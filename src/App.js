/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Map from './MapComponent/Map';

class App extends Component {
   constructor(){
       super();
       this.state = {
           loading: true,
           event: []
        };
   }
   componentDidMount() {
          fetch('http://localhost:3030/api/events?')
            .then(res => {
                return res.json()
             })
            .then(res => { 
    
                this.setState({event: res.data, loading: false})
                console.log(res.data); 
             });
         }

         render() {
          return (
              <div>
                  {this.state.loading || !this.state.event ? ( <div>Loading ....</div> 
                  ) : ( 
                  <div className="box"> 
                      {this.state.event.map((events, index) => {
                          return (
                              <div className="styleDiv" key = {index}>
                                <div>Event name: {events.name.fi}</div>
                                <div> Image: {events.event_dates.starting_day}</div>
                                <div> Description: {events.description.intro}</div>
                                <div> Location: {events.location.address.street_address}</div>
                                <div> Starting date: {events.info_url}</div>
                              </div>
                          )
                      }

                      )}
                      
                  </div>
                  )}
                  <Map />
              </div>
          )
      }
  }
export default App;
