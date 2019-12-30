import React, { Component } from "react";
import "../hotelInfo.css";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

import HotelRooms from "./HotelRooms";
import axios from "axios";

const hotelsApi = axios.create({
  baseURL: `http://localhost:4000/hotels`,
  headers: {
    "Content-Type": "application/json"
  },
  crossDomain: true,
  withCredentials: true
});

export default class HotelInfo extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS FROM HOTEL LIST", this.props);
    this.state = {
      hotelOne: this.props.hotels[0],
      hotelTwo: this.props.hotels[1]
    };
  }
  componentDidMount() {
    console.log("HOTEL INFO", this.state);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <img
              className="hotelImages"
              src="https://cache.marriott.com/marriottassets/marriott/AUSJW/ausjw-exterior-0034-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*"
            />
          </div>
          <div className="col-md-6 hotelInfo">
            <h4>{this.props.hotels.hotelName}</h4>
            <p>{this.props.hotels.hotelAddress}</p>
          </div>
          <div className="col-md-3 hotelAveragePrice">
            <p>USD ${this.props.hotels.averagePrice} per room/night</p>
            <i>*Taxes Not Included</i>
          </div>
        </div>
        <Accordion.Toggle
          onClick={this.getRooms}
          as={Button}
          variant="link"
          eventKey="0"
        >
          Rooms/Availability
        </Accordion.Toggle>
        <div className="hotelRooms">
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {/* {this.roomInfo(hotels)}
                        <HotelRooms roomInfo={hotels} /> */}
              <div className="row">
                <div className="col-md-4">
                  {this.props.hotels.hotelRooms[0].roomName}
                </div>
                <div className="col-md-2">
                  {this.props.hotels.hotelRooms[0].availability}
                </div>
                <div className="col-md-3">
                  {this.props.hotels.hotelRooms[0].price}
                </div>
                <div className="col-md-3">
                  {this.props.hotels.hotelRooms[0].details}
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-md-4">
                  {this.props.hotels.hotelRooms[1].roomName}
                </div>
                <div className="col-md-2">Availability</div>
                <div className="col-md-3">Price</div>
                <div className="col-md-3">Details</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </div>
    );
  }
}
