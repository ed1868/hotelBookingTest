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
            <img className="tech" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
          </div>
          <div className="col-md-3">
          
          <img className="tech" src="http://www.kebwebdev.com/img/mongodb.png"></img>
   
          </div>
          <div className="col-md-3">
            <img id="express" src="https://cdn-web.studio3t.com/knowledge-base/wp-content/uploads/expressjs-logo.png?x78917"/>
          </div>
          <div className="col-md-3">
            <img id="node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"/>
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
