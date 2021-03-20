import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
function Tested({ tested, setTested }) {
  var dailyrtpcrsamplescollectedicmrapplicationarr = [];
  var femaleindividualsvaccinatedarr = [];
  var firstdoseadministeredarr = [];
  var maleindividualsvaccinatedarr = [];
  var samplereportedtodayarr = [];
  var seconddoseadministeredarr = [];
  var totalcovaxinadministeredarr = [];
  var totalcovishieldadministeredarr = [];
  var totaldosesadministredarr = [];
  var totalindividualsregisteredarr = [];
  var totalindividualsvaccinatedarr = [];
  var totalrtpcrsamplescollectedicmrapplicationarr = [];
  var totalsamplestestedarr = [];
  var totalsessionsconductedarr = [];
  var totalsitesarr = [];
  var transgenderindividualsvaccinatedarr = [];
  var updatetimestamparr = [];
  for (const t of tested) {
    // console.log("te", t);
    dailyrtpcrsamplescollectedicmrapplicationarr.push(
      t.dailyrtpcrsamplescollectedicmrapplication
    );
    femaleindividualsvaccinatedarr.push(t.femaleindividualsvaccinated);
    firstdoseadministeredarr.push(t.firstdoseadministered);
    maleindividualsvaccinatedarr.push(t.maleindividualsvaccinated);
    samplereportedtodayarr.push(t.samplereportedtoday);
    seconddoseadministeredarr.push(t.seconddoseadministered);
    totalcovaxinadministeredarr.push(t.totalcovaxinadministered);
    totalcovishieldadministeredarr.push(t.totalcovishieldadministered);
    totaldosesadministredarr.push(t.totaldosesadministered);
    totalindividualsregisteredarr.push(t.totalindividualsregistered);
    totalindividualsvaccinatedarr.push(t.totalindividualsvaccinated);
    totalrtpcrsamplescollectedicmrapplicationarr.push(
      t.totalrtpcrsamplescollectedicmrapplication
    );
    totalsamplestestedarr.push(t.totalsamplestested);
    totalsessionsconductedarr.push(t.totalsessionsconducted);
    totalsitesarr.push(t.totalsites);
    transgenderindividualsvaccinatedarr.push(
      t.transgenderindividualsvaccinated
    );
    updatetimestamparr.push(t.updatetimestamp);
  }
  console.log("tested", femaleindividualsvaccinatedarr);
  const [chartData3] = useState({
    labels: updatetimestamparr,
    datasets: [
      {
        label: "Daily RTPCR sample collected ICMR application",
        data: dailyrtpcrsamplescollectedicmrapplicationarr,
        backgroundColor: "blue",
      },
      {
        label: "Female individuals vaccinated",
        data: femaleindividualsvaccinatedarr,
        backgroundColor: "blue",
      },
      {
        label: "First dose administered",
        data: firstdoseadministeredarr,
        backgroundColor: "blue",
      },
      {
        label: "Male individuals vaccinated",
        data: maleindividualsvaccinatedarr,
        backgroundColor: "blue",
      },
      {
        label: "Sample reported today",
        data: samplereportedtodayarr,
        backgroundColor: "blue",
      },
      {
        label: "Second dose administered",
        data: seconddoseadministeredarr,
        backgroundColor: "blue",
      },
      {
        label: "Total covaxin administered",
        data: totalcovaxinadministeredarr,
        backgroundColor: "blue",
      },
      {
        label: "Total covishield administered",
        data: totalcovishieldadministeredarr,
        backgroundColor: "blue",
      },
      {
        label: "Total doses administred",
        data: totaldosesadministredarr,
        backgroundColor: "blue",
      },
      {
        label: "Total individuals registered",
        data: totalindividualsregisteredarr,
        backgroundColor: "blue",
      },
      {
        label: "Total individuals vaccinated",
        data: totalindividualsvaccinatedarr,
        backgroundColor: "green",
      },
      {
        label: "Total RTPCR samples collected ICMR application",
        data: totalrtpcrsamplescollectedicmrapplicationarr,
        backgroundColor: "blue",
      },
      {
        label: "Total samples tested",
        data: totalsamplestestedarr,
        backgroundColor: "blue",
      },
      {
        label: "Total sessions conducted",
        data: totalsessionsconductedarr,
        backgroundColor: "blue",
      },
      {
        label: "Total sites",
        data: totalsitesarr,
        backgroundColor: "blue",
      },
      {
        label: "Transgender individuals vaccinated",
        data: transgenderindividualsvaccinatedarr,
        backgroundColor: "blue",
      },
    ],
  });
  return (
    <div>
      <Bar data={chartData3} />
    </div>
  );
}

export default Tested;

// import "./App.css";
// import { Component, React } from "react";
// import axios from "axios";
// import Cts from "./components/cases_time_series";
// import Tested from "./components/tested";
// import Statewise from "./components/statewise";
// class App extends Component {

//     this.state = {
//       cases_time_series: [],
//       statewise: [],
//       tested: [],
//     };
//   }
//   // const [cases_time_series, setCases_time_series] = useState([]);
//   // const [statewise, setStatewise] = useState([]);
//   // const [tested, setTested] = useState([]);

//   componentDidMount() {
//     axios.get("https://api.covid19india.org/data.json").then((res) => {
//       console.log("check");
//       this.setState({
//         cases_time_series: res.data.cases_time_series,
//         statewise: res.data.statewise,
//         tested: res.data.tested,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="">
//           <Cts cases_time_series={this.state.cases_time_series} />
//         </div>
//         <div className="">
//           <Statewise statewise={this.state.statewise} />
//         </div>
//         <div className="">
//           {console.log("in", this.state.tested)}
//           <Tested tested={this.state.tested} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
