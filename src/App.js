import React, {Component} from 'react';
import './App.css';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Events from './components/Events';


class App extends Component {
    constructor(props) {
        super(props);
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

                this.setState({ event: res.data, loading: false })
                console.log(res.data);
            });
    }

    render() {






        return (
            <div>
                {this.state.loading || !this.state.event ? (<div>Loading ....</div>
                ) : (
                        <div className="box">
                            {this.state.event.map((events, index) => {
                                return (
                                    <div className="styleDiv" key={index}>
                                        <div>Event name: {events.name.fi}</div>
                                        <div> Image: {events.event_dates.starting_day}</div>
                                        <div> Description: {events.description.intro}</div>
                                        <div> Location: {events.location.address.street_address}</div>
                                        <div> Events info: {events.info_url}</div>
                                    </div>
                                )
                            }

                            )}
                            <Map

                                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+process.env.REACT_APP_API_KEY}

                                loadingElement={<div style={{ height: `100%` }} />}

                                containerElement={<div style={{ height: `400px` }} />}

                                mapElement={<div style={{ height: `100%` }} />}

                                apidata = {this.state.event}

                            />
                        </div>
                    )}

            </div>
        )
    }
}





export default App;
