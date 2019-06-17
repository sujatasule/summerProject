import React, {Component} from 'react';
import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Search from './components/Search';
// import Events from './components/Events';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody } from 'reactstrap';



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

            <Navbar />

            <Search />

            {this.state.loading || !this.state.event ? (<div>Loading ....</div>
            ) : (

              <div className="box">

                        <Map
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+process.env.REACT_APP_API_KEY}

                            loadingElement={<div className="loading-element"/>}

                            containerElement={<div className="container-element"/>}

                            mapElement={<div className="map-element"/>}

                            apidata = {this.state.event}
                        />

                        {this.state.event.map((events, index) => {
                            return (
                              <CardDeck>
                              <Card>
                              <CardBody key={index}>
                              <CardImg top width="100%" src="{events.info_url}" alt="Card Image" />
                              <CardTitle><strong>Event name:</strong> {events.name.fi}</CardTitle>
                              <CardSubtitle><strong>Date:</strong> {events.event_dates.starting_day}</CardSubtitle>
                              <CardSubtitle><strong>Location:</strong> {events.location.address.street_address}</CardSubtitle>
                              <CardText><strong>Description:</strong> {events.description.intro}</CardText>
                              <CardSubtitle><strong>Events info:</strong> {events.info_url}</CardSubtitle>
                              <Button>More</Button>
                              </CardBody>
                              </Card>
                              </CardDeck>

                            )
                        }

                        )}

              </div>
          )}



          </div>
        )
    }
}





export default App;
