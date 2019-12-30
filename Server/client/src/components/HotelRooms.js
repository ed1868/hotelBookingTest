import React, { Component } from "react";
import "../hotelInfo.css";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default class HotelRooms extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS FROM HOTEL INFO", this.props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div className="row">
                          <div className="col-md-4">Room Name</div>
                          <div className="col-md-2">Availability</div>
                          <div className="col-md-3">Price</div>
                          <div className="col-md-3">Details</div>
                        </div>
      </div>
    );
  }
}
