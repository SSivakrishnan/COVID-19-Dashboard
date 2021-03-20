import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
function Statewise({ statewise, setStatewise }) {
  const [copysw] = useState(statewise);

  var activearr = [];
  var confirmedarr = [];
  var deathsarr = [];
  var lastupdatedtimearr = [];
  var migratedotherarr = [];
  var recoveredarr = [];
  var statearr = [];
  console.log("before out", copysw);
  for (const sw of copysw) {
    activearr.push(sw.active);
    confirmedarr.push(sw.confirmed);
    deathsarr.push(sw.deaths);
    lastupdatedtimearr.push(sw.lastupdatedtime);
    migratedotherarr.push(sw.migratedother);
    recoveredarr.push(sw.recovered);
    statearr.push(sw.state);
  }

  const [chartData2, setchartData2] = useState({
    labels: statearr,
    datasets: [
      {
        label: "Active cases",
        data: activearr,
        backgroundColor: "red",
      },
      {
        label: "Confirmed cases",
        data: confirmedarr,
        backgroundColor: "blue",
      },
      {
        label: "Deaths",
        data: deathsarr,
        backgroundColor: "black",
      },
      {
        label: "Migrated other",
        data: migratedotherarr,
        backgroundColor: "yellow",
      },
      {
        label: "Recover cases",
        data: recoveredarr,
        backgroundColor: "darkgreen",
      },
    ],
  });
  const handlesort = () => {
    let activearr1 = [],
      confirmedarr1 = [],
      deathsarr1 = [],
      lastupdatedtimearr1 = [],
      migratedotherarr1 = [],
      recoveredarr1 = [],
      statearr1 = [];
    let temp = copysw.sort(function (a, b) {
      var dateA = new Date(
          a.lastupdatedtime.slice(6, 10),
          a.lastupdatedtime.slice(3, 5),
          a.lastupdatedtime.slice(0, 2),
          a.lastupdatedtime.slice(11, 13),
          a.lastupdatedtime.slice(14, 16),
          a.lastupdatedtime.slice(17, 19)
        ),
        dateB = new Date(
          b.lastupdatedtime.slice(6, 10),
          b.lastupdatedtime.slice(3, 5),
          b.lastupdatedtime.slice(0, 2),
          b.lastupdatedtime.slice(11, 13),
          b.lastupdatedtime.slice(14, 16),
          b.lastupdatedtime.slice(17, 19)
        );

      return dateA - dateB;
    });

    console.log("after in", temp);
    for (const sw of temp) {
      activearr1.push(sw.active);
      confirmedarr1.push(sw.confirmed);
      deathsarr1.push(sw.deaths);
      lastupdatedtimearr1.push(sw.lastupdatedtime);
      migratedotherarr1.push(sw.migratedother);
      recoveredarr1.push(sw.recovered);
      statearr1.push(sw.state);
    }

    setchartData2({
      labels: statearr1,
      datasets: [
        {
          label: "Active cases",
          data: activearr1,
          backgroundColor: "red",
        },
        {
          label: "Confirmed cases",
          data: confirmedarr1,
          backgroundColor: "blue",
        },
        {
          label: "Deaths",
          data: deathsarr1,
          backgroundColor: "black",
        },
        {
          label: "Migrated other",
          data: migratedotherarr1,
          backgroundColor: "yellow",
        },
        {
          label: "Recover cases",
          data: recoveredarr1,
          backgroundColor: "darkgreen",
        },
      ],
    });
  };
  return (
    <div>
      <button className="sort" onClick={handlesort}>
        Sort (last updated time)
      </button>
      <Bar
        data={chartData2}
        options={{
          title: {
            display: true,
            text: "STATEWISE",
          },
        }}
      />
    </div>
  );
}

export default Statewise;
