import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelInfo from "./HotelInfo";

export default class HotelList extends Component {
  render() {
    return (
      <div>
        <h1>HOTEL LIST COMPONENT</h1>
        <div className="container">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <HotelInfo />
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row">
                    <div className="col-md-4">
                      Room Name
                    </div>
                    <div className="col-md-2">
                      Availability
                    </div>
                    <div className="col-md-3">
                      Price
                    </div>
                    <div className="col-md-3">
                      Details
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Rooms/Availability
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Rooms/Availability
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Rooms/Availability
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
