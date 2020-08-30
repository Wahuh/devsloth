import React from "react";
import PropTypes from "prop-types";
import { Flex } from "rebass";

const MessageList = (props) => {
  return (
    <Flex flexDirection="column" flex={1}>
      <Flex
        backgroundColor="white"
        alignSelf="flex-start"
        sx={{
          margin: "1rem",
          padding: "1rem",
          boxShadow: "0 2px 0 hsl(220, 7%, 83%)"
        }}
      >
        Hey Yog the beszadad how's it going?
      </Flex>
    </Flex>
  );
};

MessageList.propTypes = {};

export default MessageList;
