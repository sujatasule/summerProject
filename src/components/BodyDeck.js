import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody } from 'reactstrap';

const BodyDeck = (props) => {
    return (
    <div>
        <br>
        </br>
        <CardDeck>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Event: Mid-Summer Camping</CardTitle>
            <CardSubtitle>Date: 21st June 2019</CardSubtitle>
            <CardSubtitle>Place: Nuuksio National Park</CardSubtitle>
            <CardText>Details: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>More</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle:</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        </CardDeck>
    <br>
    </br>
        <CardDeck>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Event I</CardTitle>
            <CardSubtitle>Name: Mid-Summer Camping</CardSubtitle>
            <CardSubtitle>Place: Nuuksio National Park</CardSubtitle>
            <CardText>Details: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>More</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        </CardDeck>
    </div>
    );
  };
  
  export default BodyDeck;
