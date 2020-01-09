import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelInfo from "./HotelInfo";
import HotelRooms from "./HotelRooms";

export default class HotelList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      hotels: [
        {
          value: 2,
          valueTwo: 5,
          hotelName: "Marriot Grande Vista Dr",
          hotelAddress: "Grande vista lake, Orlando Fl 33193",
          hotelRooms: [
            {
              roomName: "Queen Bed",
              price: "149.99",
              details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
              availability: "AVAILABLE",
              conditions: "Meal Plan: NO ADDITIONAL MEALS",
              cancelationPolicy:
                "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
            },

            {
              roomName: "Villa ping",
              price: "1889.99",
              details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
              availability: "SOLD OUT",
              conditions: "Meal Plan: NO ADDITIONAL MEALS",
              cancelationPolicy:
                "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
            }
          ],
          hotelTax: "14",
          hotelFee: "25",
          description:
            "Luxurious midtown hotel featuring 731 spacious rooms and suites with breathtaking views of Central Park and the Manhattan skyline.",
          imgName: "a1",
          url: "",
          averagePrice: "290.00",
          website: "https://www.parkernewyork.com/home/"
        },
        {
          value: 3,
          valueTwo:6,
          hotelName: "W Aspen",
          hotelAddress: "Grande vista lake, Orlando Fl 33193",
          hotelRooms: [
            {
              roomName: "Queen Bed",
              price: "149.99",
              details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
              availability: "AVAILABLE",
              conditions: "Meal Plan: NO ADDITIONAL MEALS",
              cancelationPolicy:
                "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
            },
            {
              roomName: "Villa esoo",
              price: "1889.99",
              details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
              availability: "SOLD OUT",
              conditions: "Meal Plan: NO ADDITIONAL MEALS",
              cancelationPolicy:
                "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
            }
          ],
          hotelTax: "14",
          hotelFee: "25",
          averagePrice: "540.00",
          description:
            "Luxurious midtown hotel featuring 731 spacious rooms and suites with breathtaking views of Central Park and the Manhattan skyline.",
          imgName: "a1",
          url: "",
          website: "https://www.parkernewyork.com/home/"
        }
      ]
    };
  }
  componentDidMount() {
    console.log("ASERE", this.state);
    // hotelsApi
    //   .get()
    //   .then(responseFromAPI => {
    //     this.setState({ ...this.state, hotels: responseFromAPI.data.hotels });
    //     console.log("Response from API is: ", responseFromAPI.data);
    //   })
    //   .catch(err => {
    //     console.log("Error is: ", err);
    //   });
  }

  render() {
    return (
      <div>
        <h1>Miami Hotels</h1>

        {this.state.hotels !== null &&
          this.state.hotels.map(hotels => {
            console.log("EL HOTEL", hotels);
            return (
              <div className="container">
                <Accordion defaultActiveKey={hotels.value}>
                  <Card>
                    <Card.Header>
                      <HotelInfo hotels={hotels} />
                    </Card.Header>
                   
                  </Card>
                </Accordion>
                <br></br>
              </div>

            );
          })}
      </div>
    );
  }
}
