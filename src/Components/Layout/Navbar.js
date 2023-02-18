import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  FlagOutlined,
  BarChartOutlined,
  HeatMapOutlined,
  BugOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };
  return (
    <div>
      <Menu
        style={{
          textAlign: "center",
          backgroundColor: "#339966",
        }}
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          style={{ marginRight: "50px" }}
          key="home"
          icon={<BugOutlined />}
        >
          <Link to="/">Covid-19</Link>
        </Menu.Item>
        <Menu.Item
          style={{ marginRight: "50px" }}
          key="state"
          icon={<AimOutlined />}
        >
          <Link to="/linechart">State Wise Data</Link>
        </Menu.Item>

        <Menu.Item
          style={{ marginRight: "50px" }}
          key="barchart"
          icon={<BarChartOutlined />}
        >
          <Link to="/barchart">BarChart</Link>
        </Menu.Item>
        <Menu.Item
          style={{ marginRight: "50px" }}
          key="countrydata"
          icon={<FlagOutlined />}
        >
          <Link to="/countrydata">Country Data</Link>
        </Menu.Item>
        <Menu.Item
          style={{ marginRight: "50px" }}
          key="map"
          icon={<HeatMapOutlined />}
        >
          <Link to="/worldmap">Map</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
