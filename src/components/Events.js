import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody } from 'reactstrap';

const Events = (props) => {
    return (
    <div>
        <br>
        </br>
        <CardDeck>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody className="styleDiv" key={index}>
            <CardTitle>Event name: {events.name.fi}</CardTitle>
            <CardSubtitle>Image: {events.event_dates.starting_day}</CardSubtitle>
            <CardSubtitle>Location: {events.location.address.street_address}</CardSubtitle>
            <CardText>Description: {events.description.intro}</CardText>
            <CardSubtitle>Events info: {events.info_url}</CardSubtitle>
            <Button>More</Button>
            </CardBody>
        </Card>
        </CardDeck>

    </div>
    );
  };

  export default Events;
