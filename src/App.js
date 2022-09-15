import React from "react";
// import Box from "@material-ui/core/Box";
import Card1 from "./Components/Card1/Card1";
import Card2 from "./Components/Card2/Card2";
import Card3 from "./Components/Card3/Card3";
import "./App.css";
import "./custom.css";

function App() {
  return (
    <div className="content">
      <div className="content__inner">            
        <div className="content__main">               
          <div className="row row--equal-height">
            <div className="col sm-12 md-4">
              <Card1 />
            </div>
            <div className="col sm-12 md-4">
              <Card2 />
            </div>
            <div className="col sm-12 md-4">
              <Card3 />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
