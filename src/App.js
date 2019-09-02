import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import First from "./components/firstComponent/First";
import Second from "./components/secondComponent/Second";

function App(props) {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <First {...props}></First>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Second {...props}></Second>
        </div>
      </div>
    </div>
  );
}

export default App;
