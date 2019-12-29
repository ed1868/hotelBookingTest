import React, { Component } from "react";
import "../hotelInfo.css";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import axios from 'axios';


const hotelsApi = axios.create({
  baseURL: `http://localhost:4000/hotels`,
  headers: {
    'Content-Type': 'application/json'
},
  withCredentials: true
});


export default class HotelInfo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      hotels: null
    };
  }
  componentDidMount() {
    hotelsApi
      .get()
      .then(responseFromAPI => {
        this.setState({ ...this.state, hotels: responseFromAPI.data.hotels });
        console.log("Response from API is: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }
  getRooms = e => {
    console.log("CONOOOO BROTHER");
  };
  render() {
    return(
      <div>
        <h1>THERE IS NO HOTELS IN THIS DATABASE</h1>


    
  
    {this.state.hotels !== null &&
    this.state.hotels.map(hotels => {
      return(
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
            <Accordion.Toggle
              onClick={this.getRooms}
              as={Button}
              variant="link"
              eventKey="0"
            >
              Rooms/Availability
            </Accordion.Toggle>
          </div>
          <div className="col-md-3 hotelAveragePrice">
            <p>USD $123 per room/night</p>
            <i>*Taxes Not Included</i>
          </div>
        </div>
        </div>
      )
    })}
          </div>
    )
  }
}
