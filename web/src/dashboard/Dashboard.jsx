import React from "react";
import PropTypes from "prop-types";
import Truck from "../truck/Truck";
import SideMenu from "./SideMenu";
import { Flex } from "rebass";

const Dashboard = (props) => {
  return (
    <Flex>
      <SideMenu />
      <Truck />
    </Flex>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
