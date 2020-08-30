import React from "react";
import PropTypes from "prop-types";
import { Flex, Button, Text } from "rebass";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <Flex
      flexDirection="column"
      height={700}
      minWidth="20vw"
    >
      <Flex flexDirection="column" width="100%">
        <Text fontSize={36} color="white" textAlign="left">
          DevSloth lets you work more collaboratively and get more done.
        </Text>
        <Text fontSize={20} color="white" textAlign="left">
          DevSloth's boards, lists, and cards enable you to organize and
          prioritize your projects in a fun, flexible, and rewarding way.
        </Text>
      </Flex>
      <Link to="/signup" width={200} backgroundColor="green">
        Get Started
      </Link>
    </Flex>
  );
};

Hero.propTypes = {};

export default Hero;
