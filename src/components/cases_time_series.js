import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
function Cases_time_series({
  cases_time_series,
  setCases_time_series,
  copycts,
}) {
  var dailyconfirmedarr = [];
  var dailydecesedarr = [];
  var dailyrecoveredarr = [];
  var datearr = [];
  var totalconfirmed = [];
  var totaldeceased = [];
  var totalrecovered = [];
  for (const cts of cases_time_series) {
    dailyconfirmedarr.push(cts.dailyconfirmed);
    dailydecesedarr.push(cts.dailydeceased);
    dailyrecoveredarr.push(cts.dailyrecovered);
    datearr.push(cts.date);
    totalconfirmed.push(cts.totalconfirmed);
    totaldeceased.push(cts.totaldeceased);
    totalrecovered.push(cts.totalrecovered);
  }
  const [chartData, setchartData] = useState({
    labels: datearr,
    datasets: [
      {
        label: "Daily Confirmed",
        data: dailyconfirmedarr,
        backgroundColor: "red",
      },
      {
        label: "Daily Deceased",
        data: dailydecesedarr,
        backgroundColor: "grey",
      },
      {
        label: "Daily Recovered",
        data: dailyrecoveredarr,
        backgroundColor: "lightgreen",
      },
      {
        label: "Total Confirmed",
        data: totalconfirmed,
        backgroundColor: "#ed2d05",
      },
      {
        label: "Total Deceased",
        data: totaldeceased,
        backgroundColor: "black",
      },
      {
        label: "Total recovered",
        data: totalrecovered,
        backgroundColor: "darkgreen",
      },
    ],
  });

  const handledaily = () => {
    setchartData({
      labels: datearr,
      datasets: [
        {
          label: "Daily Confirmed",
          data: dailyconfirmedarr,
          backgroundColor: "red",
        },
        {
          label: "Daily Deceased",
          data: dailydecesedarr,
          backgroundColor: "grey",
        },
        {
          label: "Daily Recovered",
          data: dailyrecoveredarr,
          backgroundColor: "lightgreen",
        },
        {
          label: "Total Confirmed",
          data: totalconfirmed,
          backgroundColor: "#ed2d05",
        },
        {
          label: "Total Deceased",
          data: totaldeceased,
          backgroundColor: "black",
        },
        {
          label: "Total recovered",
          data: totalrecovered,
          backgroundColor: "darkgreen",
        },
      ],
    });
  };
  const handleweekly = () => {
    let dailyconfirmedarr1 = [],
      dailydecesedarr1 = [],
      dailyrecoveredarr1 = [],
      datearr1 = [],
      totalconfirmed1 = [],
      totaldeceased1 = [],
      totalrecovered1 = [];
    let temp = [];

    for (var i = 0; i < copycts.length; i = i + 7) {
      temp.push(copycts[i]);
    }

    for (const cts of temp) {
      dailyconfirmedarr1.push(cts.dailyconfirmed);
      dailydecesedarr1.push(cts.dailydeceased);
      dailyrecoveredarr1.push(cts.dailyrecovered);
      datearr1.push(cts.date);
      totalconfirmed1.push(cts.totalconfirmed);
      totaldeceased1.push(cts.totaldeceased);
      totalrecovered1.push(cts.totalrecovered);
    }
    setchartData({
      labels: datearr1,
      datasets: [
        {
          label: "Daily Confirmed",
          data: dailyconfirmedarr1,
          backgroundColor: "red",
        },
        {
          label: "Daily Deceased",
          data: dailydecesedarr1,
          backgroundColor: "grey",
        },
        {
          label: "Daily Recovered",
          data: dailyrecoveredarr1,
          backgroundColor: "lightgreen",
        },
        {
          label: "Total Confirmed",
          data: totalconfirmed1,
          backgroundColor: "#ed2d05",
        },
        {
          label: "Total Deceased",
          data: totaldeceased1,
          backgroundColor: "black",
        },
        {
          label: "Total recovered",
          data: totalrecovered1,
          backgroundColor: "darkgreen",
        },
      ],
    });
  };
  const handlemonthly = () => {
    let dailyconfirmedarr2 = [],
      dailydecesedarr2 = [],
      dailyrecoveredarr2 = [],
      datearr2 = [],
      totalconfirmed2 = [],
      totaldeceased2 = [],
      totalrecovered2 = [];
    let temp = [];

    for (var i = 0; i < copycts.length; i = i + 30) {
      temp.push(copycts[i]);
    }

    for (const cts of temp) {
      dailyconfirmedarr2.push(cts.dailyconfirmed);
      dailydecesedarr2.push(cts.dailydeceased);
      dailyrecoveredarr2.push(cts.dailyrecovered);
      datearr2.push(cts.date);
      totalconfirmed2.push(cts.totalconfirmed);
      totaldeceased2.push(cts.totaldeceased);
      totalrecovered2.push(cts.totalrecovered);
    }
    setchartData({
      labels: datearr2,
      datasets: [
        {
          label: "Daily Confirmed",
          data: dailyconfirmedarr2,
          backgroundColor: "red",
        },
        {
          label: "Daily Deceased",
          data: dailydecesedarr2,
          backgroundColor: "grey",
        },
        {
          label: "Daily Recovered",
          data: dailyrecoveredarr2,
          backgroundColor: "lightgreen",
        },
        {
          label: "Total Confirmed",
          data: totalconfirmed2,
          backgroundColor: "#ed2d05",
        },
        {
          label: "Total Deceased",
          data: totaldeceased2,
          backgroundColor: "black",
        },
        {
          label: "Total recovered",
          data: totalrecovered2,
          backgroundColor: "darkgreen",
        },
      ],
    });
  };

  return (
    <div>
      <form>
        <div className="filters">
          <input type="radio" name="filter" onChange={handledaily} />
          <label>daily</label>
          <input type="radio" name="filter" onChange={handleweekly} />
          <label>weekly</label>
          <input type="radio" name="filter" onChange={handlemonthly} />
          <label>monthly</label>
        </div>
      </form>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "CASES TIME SERIES",
          },
        }}
      />
    </div>
  );
}

export default Cases_time_series;
