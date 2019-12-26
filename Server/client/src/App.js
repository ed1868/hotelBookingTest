import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HotelList from "./components/HotelList";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h3>This test was made with these technologies</h3>
        <div className="row">
          <div className="col-md-3">
            <p>Insert React picture</p>
          </div>
          <div className="col-md-3">
            <p>Insert Mongo Db picture</p>
          </div>
          <div className="col-md-3">
            <p>Insert Express picture</p>
          </div>
          <div className="col-md-3">
            <p>Insert Node picture</p>
          </div>
        </div>
      </div>
      <div className="hotelList">
        <HotelList />
      </div>
    </div>
  );
}

export default App;
