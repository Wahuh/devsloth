import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";
import Chat from "../chat/Chat";

const Truck = (props) => {
  return (
    <Flex flex={1}>
      <Chat />
    </Flex>
  );
};

Truck.propTypes = {};

export default Truck;
