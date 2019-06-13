import React from 'react';

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import Maps from './MapComponent/Map';


<Map

googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

loadingElement={<div style={{ height: `100%` }} />}

containerElement={<div style={{ height: `400px` }} />}

mapElement={<div style={{ height: `100%` }} />}

/>