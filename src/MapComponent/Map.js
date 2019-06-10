import React, {Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';

function Map() {
  
  
    return (
    <GoogleMap 
    defaultZoom={14} 
    defaultCenter={{ lat: 60.169857, lng: 24.938379 }}
    >
      <Marker
      position={
       { lat: 60.244960, 
          lng: 24.989050
      }
      }
    
      />
  
        <InfoWindow
        position={
          { lat: 60.244960, 
             lng: 24.989050
         }
         }
        >
          <div>Events details</div>
          </InfoWindow>
     
      </GoogleMap>
    );
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(Map));


export default class App extends Component {
  render () {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap 
      googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
      loadingElement={<div style={{height: "100%"}} />}
      containerElement = {<div style={{height: "100%"}} />}
      mapElement={<div style={{height: "100%"}} />}
      />
  
  </div>
    
  );
}
}


