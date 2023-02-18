import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Api from "./Components/Api";
import BarChart from "./Components/Chart/BarChart";
import Navbar from "./Components/Layout/Navbar";
import LineChart from "./Components/Chart/LineChart";
//import LineGraph from "./Components/Chart/LineChart";
import Covid19Info from "./Components/Chart/Covid19Info";
import CountryData from "./Components/Chart/CountryData";
import Map from "./Components/Chart/Map";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Covid19Info} />
          <Route exact path="/linechart" component={LineChart} />
          <Route exact path="/barchart" component={BarChart} />
          <Route exact path="/countrydata" component={CountryData} />
          <Route exact path="/worldmap" component={Map} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
