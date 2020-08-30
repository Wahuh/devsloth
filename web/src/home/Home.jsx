import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import { Flex } from "rebass";
import Truck from "../truck/Truck";
import Dashboard from "../dashboard/Dashboard";

const Home = (props) => {
  return (
    <Flex
      justifyContent="center"
      sx={{ background: "linear-gradient(135deg, #BA2525, #911111)" }}
    >
      <Hero />
    </Flex>
  );
};

Home.propTypes = {};

export default Home;
