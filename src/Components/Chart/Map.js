import React, { useState, useEffect } from "react";
import { Select } from "antd";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import "./Map.css";
const { Option, OptGroup } = Select;

const Map = () => {
  const [users, setUsers] = useState([]);
  const [countryName, setCountryName] = useState("all");

  const handleChangee = (Item) => {
    console.log(`selected ${Item.value}`);
    setCountryName(Item.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );

      console.log(response.data);
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      {/* maq */}
      <div
        style={{
          marginLeft: "500px",
          marginTop: "5px",
        }}
      >
        <Select
          showSearch
          labelInValue
          defaultValue={{ key: "worldcase", value: "World Wide" }}
          style={{ width: 120 }}
          onChange={handleChangee}
        >
          <Option value="all">World Map</Option>
          {users &&
            users.map((data) => (
              <Option value={data?.countryInfo?.iso2}>{data?.country}</Option>
            ))}
        </Select>
      </div>
      <div
        style={{
          marginLeft: "80px",
          marginTop: "10px",
          outline: "#6699ff solid 5px",
        }}
      >
        <MapContainer center={[20, 77]} zoom={3}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {users
            .filter((name) => {
              if (name.countryInfo.iso2 === countryName) {
                console.log("Map Country name", name);
                return name;
              } else if (countryName === "all") {
                console.log("Country Name", name);
                return name;
              }
            })
            .map((curr) => {
              return (
                <div key={curr.country}>
                  <Marker
                    position={[curr.countryInfo.lat, curr.countryInfo.long]}
                  >
                    <Popup>
                      <img
                        style={{
                          textAlign: "center",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        src={curr.countryInfo.flag}
                        width="120px"
                        height="50px"
                      />
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        {curr.country}
                      </p>

                      <h1
                        style={{
                          textAlign: "center",
                          backgroundColor: "#669999",
                        }}
                      >
                        Total Active Cases:{curr.active}
                      </h1>
                      <h1
                        style={{
                          textAlign: "center",
                          backgroundColor: "green",
                        }}
                      >
                        Total Recovered :{curr.recovered}
                      </h1>
                      <h1
                        style={{ textAlign: "center", backgroundColor: "red" }}
                      >
                        Total Deaths:{curr.deaths}
                      </h1>
                    </Popup>
                  </Marker>
                </div>
              );
            })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
