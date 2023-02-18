import React, { useState, useEffect } from "react";
import { fetchCountries } from "../Api";
import { Select, Button, Card, Row, Col } from "antd";
import { CardValue } from "../Api";
import { Bar, Pie, Line } from "react-chartjs-2";
import "antd/dist/antd.css";
import axios from "axios";
import covid19 from "../Images/covid19.jpg";

import { throwStatement } from "@babel/types";
const { Option } = Select;

const CountryData = () => {
  const [countries, setCountries] = useState([]);
  const [vall, setVall] = useState();
  const [changeChart, setChangeChart] = useState("Bar");

  //Showing Country
  useEffect(() => {
    const fetchValue = async () => {
      setCountries(await fetchCountries());
    };
    fetchValue();
  }, []);

  //Showing country data
  const CountryValue = async (value) => {
    await axios

      .get(`https://disease.sh/v3/covid-19/countries/${value}`)
      .then((res) => {
        setVall(res.data);
      })
      .catch((err) => {
        console.log("I am error", err);
      });
  };

  // useEffect(() => {
  //   CountryValue();
  // }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    CountryValue(value);
  };

  //showing global data

  useEffect(() => {
    const CardValue = async () => {
      await axios

        .get("https://disease.sh/v3/covid-19/all")
        .then((res) => {
          console.log("I am data ", res.data);

          setVall(res.data);
        })
        .catch((err) => {
          console.log("I am error", err);
        });
    };
    CardValue();
  }, []);

  console.log("I am state ", vall);
  const chartButton = [
    {
      id: 1,
      name: "Bar Chart",
    },
    {
      id: 2,
      name: "Line Chart",
    },
    {
      id: 3,
      name: "Pie Chart",
    },
  ];
  const handleClick = (elem) => {
    setChangeChart(elem.name);
  };
  return (
    <>
      <div style={{ marginLeft: "200px", marginTop: "10px" }}>
        <img src={covid19} width="80%" height="350px" />
      </div>

      <h1 style={{ textAlign: "center" }}>
        Reported Cases or Deaths by Country or Territory
      </h1>
      {/* card */}
      <Row justify="center">
        <Col span={7}>
          <Card
            // style={{ color: "brown" }}
            title="Cases"
            style={{ width: 300, textAlign: "center" ,color:"brown" }}
          >
            <h1>{vall?.cases}</h1>
            <h2>
              Number of{" "}
              <span style={{ color: "brown", fontWeight: "bold" }}>
                Active cases
              </span>{" "}
              of covid-19{" "}
              <span
                style={{
                  color: "#666633 ",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {" "}
                {vall?.country}{" "}
              </span>
            </h2>
          </Card>
        </Col>
        <Col span={7}>
          <Card title="Recovered" style={{ width: 300, textAlign: "center" }}>
            <h1>{vall?.recovered}</h1>
            <h2>
              Number of{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Recovered Cases{" "}
              </span>
              of covid-19{" "}
              <span
                style={{
                  color: "#666633 ",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {" "}
                {vall?.country}{" "}
              </span>
            </h2>
          </Card>
        </Col>
        <Col span={7}>
          <Card title="Deaths" style={{ width: 300, textAlign: "center" }}>
            <h1>{vall?.deaths}</h1>
            <h2>
              Number of{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {" "}
                Deaths Cases{" "}
              </span>{" "}
              of covid-19{" "}
              <span
                style={{
                  color: "#666633 ",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {" "}
                {vall?.country}{" "}
              </span>
            </h2>
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: "10px" }}>
        <Select
          placeholder="Select Countries"
          style={{ width: 120, marginLeft: "600px" }}
          onChange={handleChange}
        >
          {countries.map((count, index) => {
            return (
              <Select.Option key={index} value={count}>
                {count}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div style={{ width: "65%", height: "500px", marginLeft: "270px" }}>
        {changeChart === "Bar Chart" && (
          <Bar
            data={{
              labels: ["Cases", "Recovered", "Deaths"],
              datasets: [
                {
                  label: "Cases",
                  data: [vall?.cases, vall?.recovered, vall?.deaths],
                  backgroundColor: ["brown", "green", "red"],

                  borderWidth: 5,
                },
              ],
              borderWidth: 1,
            }}
            height={200}
            width={300}
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
        )}

        {changeChart === "Pie Chart" && (
          <Pie
            data={{
              labels: ["Cases", "Recovered", "Deaths"],
              datasets: [
                {
                  label: "Cases",
                  data: [vall?.cases, vall?.recovered, vall?.deaths],
                  backgroundColor: ["brown", "green", "red"],

                  borderWidth: 5,
                },
              ],
              borderWidth: 1,
            }}
            height={200}
            width={300}
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
        )}

        {changeChart === "Line Chart" && (
          <Line
            // options={{
            //   maintainAspectRatio: false,
            //   scales: {
            //     yAxes: [
            //       {
            //         ticks: {
            //           beginAtZero: true,
            //         },
            //       },
            //     ],
            //     xAxes: [
            //       {
            //         ticks: {
            //           beginAtZero: true,
            //         },
            //       },
            //     ],
            //   },

            //   legend: {
            //     labels: {
            //       fontSize: 20,
            //     },
            //   },
            // }}
            data={{
              labels: ["Cases", "Today ", "Active "],

              datasets: [
                {
                  label: ["Cases"],
                  data: [vall?.cases, vall?.todayCases, vall?.active],
                  fill: true,
                  backgroundColor: ["rgba(217, 179, 140,0.2)"],
                  borderColor: ["brown"],
                  borderWidth: 5,
                },
                {
                  label: "Recovered",
                  data: [vall?.recovered, vall?.todayRecovered, vall?.tests],
                  fill: true,
                  backgroundColor: ["rgba(0, 255, 0,0.2)"],
                  borderColor: ["green"],
                  borderWidth: 5,
                },
                {
                  label: "Deaths",
                  data: [vall?.deaths, vall?.todayDeaths, vall?.critical],
                  fill: true,
                  backgroundColor: ["rgba(255, 179, 179,0.2)"],
                  borderColor: ["#ff0000"],
                  borderWidth: 5,
                },
              ],
            }}
          />
        )}
      </div>

      {/* Button */}
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        {chartButton.map((elem) => {
          return (
            <Button
              style={{ marginRight: "10px" }}
              type="primary"
              onClick={() => handleClick(elem)}
              key={elem.id}
            >
              {elem.name}{" "}
            </Button>
          );
        })}
      </div>
      <div style={{ marginTop: "30px" }}>Satya</div>
    </>
  );
};

export default CountryData;
//<Option value="jack">Jack</Option>
