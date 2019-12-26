import React, { Component } from "react";
import "../hotelInfo.css";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default class HotelInfo extends Component {
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
            <h4>Hotel Name | Hotel Raiting</h4>
            <p>125 calhou Street , Charleston, USA</p>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Rooms/Availability
            </Accordion.Toggle>
          </div>
          <div className="col-md-3 hotelAveragePrice">
            <p>USD $123 per room/night</p>
            <i>*Taxes Not Included</i>
          </div>
        </div>
      </div>
    );
  }
}
