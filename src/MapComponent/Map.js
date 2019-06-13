import React, {useState} from 'react';

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';



export default withScriptjs(withGoogleMap((props) => {

  const [selectedEvent, setSelectedEvent] = useState(null);

  var data = [];
  console.log(props.apidata)
  return (

    <GoogleMap

      defaultZoom={14}

      defaultCenter={{ lat: 60.169857, lng: 24.938379 }}

    >

      {props.apidata.map((event, index) => (

        <Marker

          key={index}
          position={{
            lat: event.location.lat,
            lng: event.location.lon
          }}
          onClick={() => {
            setSelectedEvent(event);
          }}
        />
      ))}

      {selectedEvent && (
        <InfoWindow
        position={{
          lat: selectedEvent.location.lat,
          lng: selectedEvent.location.lon
        }}
        onCloseClick={() => {
          setSelectedEvent(null);
        }}
        >
          <div>
         <h2> {selectedEvent.name.fi}</h2>
         <p>Description: {selectedEvent.description.intro}</p>
         <p>Address: {selectedEvent.location.address.street_address}</p>
         <p>Events info: {selectedEvent.info_url}</p>
         <p>Starting date: {selectedEvent.event_dates.starting_day}</p>
         <p>Ending date: {selectedEvent.event_dates.ending_day}</p>
          </div>
          </InfoWindow>
      )}
    </GoogleMap>

  );

}

));


