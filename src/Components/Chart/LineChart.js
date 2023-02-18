import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";

const LineChart = () => {
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    const StateValue = async () => {
      await axios

        .get("https://data.covid19india.org/data.json")
        .then((res) => {
          console.log("I am data ", res.data.statewise);
          setStateData(res.data.statewise);
        })
        .catch((err) => {
          console.log("I am error", err);
        });
    };
    StateValue();
  }, []);
  return (
    <>
      <Line
        data={{
          labels: stateData.map(({ state }) => state),
          datasets: [
            {
              label: "Active",
              data: stateData.map(({ active }) => active),
              backgroundColor: ["brown"],

              borderWidth: 1,
            },
            {
              label: "Deaths",
              data: stateData.map(({ deaths }) => deaths),
              backgroundColor: ["red"],

              borderWidth: 5,
            },
            {
              label: "Recovered",
              data: stateData.map(({ recovered }) => recovered),
              backgroundColor: ["green"],

              borderWidth: 5,
            },
          ],
          borderWidth: 5,
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default LineChart;
