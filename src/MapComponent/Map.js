import React, {Component} from 'react';
import GoogleMap  from 'google-map-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export default class Map extends Component {
  render () {
    return (
      <GoogleMap 
     bootstrapURLKeys = {{ key: process.env.REACT_APP_API_KEY}}
      zoom = {14}
      style = {mapStyles}
      center = {{
        lat: 60.169857,
        lng: 24.938379
      }}
      />
    
  );
}
}


