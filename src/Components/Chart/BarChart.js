import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { fetchData } from "../Api";

const BarChart = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      console.log(data.data);
      // console.log(users);
      setUsers(data.data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <Line
        data={{
          labels: users.map(({ country }) => country),
          datasets: [
            {
              label: "Cases",
              data: users.map(({ cases }) => cases),
              backgroundColor: ["brown"],

              borderWidth: 1,
            },
            {
              label: "Deaths",
              data: users.map(({ deaths }) => deaths),
              backgroundColor: ["red"],

              borderWidth: 5,
            },
            {
              label: "Recovered",
              data: users.map(({ recovered }) => recovered),
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

export default BarChart;
