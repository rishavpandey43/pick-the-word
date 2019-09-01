import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import First from "./components/firstComponent/First";
import Second from "./components/secondComponent/Second";

function App() {
  console.log(this);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <First></First>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Second></Second>
        </div>
      </div>
    </div>
  );
}

export default App;
