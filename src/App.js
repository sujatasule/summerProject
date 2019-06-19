/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Map from './MapComponent/Map';
import Style from './Style';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            event: []
        };
    }
    /** fetch data from server */
    componentDidMount() {
        fetch('http://localhost:3030/api/events?limit=21')
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
            <Container fluid>
                <Row>
                    a text
                </Row>
                <Row>
                    <Col>
                        <Map

                            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + process.env.REACT_APP_API_KEY}

                            loadingElement={<div style={{ height: `100%` }} />}

                            containerElement={<div style={{ height: `400px` }} />}

                            mapElement={<div style={{ height: `100%` }} />}

                            apidata={this.state.event}

                        />

                    </Col>
                </Row>
                <Row>
                        <Style apidata={this.state.event} />
                </Row>
            </Container>
        )
    }
}



export default App;
