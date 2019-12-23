const mongoose = require("mongoose");
const Hotel = require("../../Models/Hotel");

testHotels = () => {
  let testHotel = {
    hotelName: "Marriot Grande Vista Dr",
    hotelAddress: "Grande vista lake, Orlando Fl 33193",
    hotelRooms: [
      {
        roomName: "Queen Bed",
        price: "149.99",
        details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
        availability: "AVAILABLE",
        conditions: "Meal Plan: NO ADDITIONAL MEALS",
        cancelationPolicy: "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
      },
      {
        roomName: "Villa Room",
        price: "1889.99",
        details: "Fresh sheets, mini bar, Wifi, Flatscreen tv",
        availability: "SOLD OUT",
        conditions: "Meal Plan: NO ADDITIONAL MEALS",
        cancelationPolicy: "PENALTY OF 1 BOOKED NIGHT WHEN CANCELLING AFTER"
      }
    ],
    hotelTax: "14",
    hotelFee: "25",
    description:
      "Luxurious midtown hotel featuring 731 spacious rooms and suites with breathtaking views of Central Park and the Manhattan skyline.",
    imgName: "a1",
    url: "",
    website: "https://www.parkernewyork.com/home/"
  };

  Hotel.create(testHotel, (err, hotel) => {
    if (err) {
      throw err;
    }

    console.log(hotel);

    return hotel;
  });
};

module.exports = testHotel;
