import "./App.css";
import { React, useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Cts from "./components/cases_time_series";
import Tested from "./components/tested";
import Statewise from "./components/statewise";
function App() {
  const [copycts, setCcts] = useState([]);
  const [cases_time_series, setCases_time_series] = useState([]);
  const [statewise, setStatewise] = useState([]);
  const [tested, setTested] = useState([]);
  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      setCases_time_series(res.data.cases_time_series);
      setCcts(res.data.cases_time_series);
      setStatewise(res.data.statewise);
      setTested(res.data.tested);
    });
  }, []);
  return (
    <div className="App">
      <div className="cts">
        {/* {console.log("ccts", copycts)} */}
        <h1 className="headline">Covid-19 Dashboard</h1>
        <Cts
          id="cts"
          cases_time_series={cases_time_series}
          setCases_time_series={setCases_time_series}
          copycts={copycts}
        />
      </div>
      <div className="statewise">
        <Statewise statewise={statewise} setStatewise={setStatewise} />
      </div>
      <div className="tested">
        <Tested tested={tested} setTested={setTested} />
      </div>
    </div>
  );
}

export default App;
