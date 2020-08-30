import React from "react";
import PropTypes from "prop-types";
import { Input } from "@rebass/forms";
import { Flex } from "rebass";

const MessageComposer = (props) => {
  return (
    <Flex>
      <Input
        placeholder="Message"
        sx={{
          backgroundColor: "#D9E2EC",
          borderRadius: "4px",
          margin: "1rem",
          border: "none",
          padding: "0.75rem 1rem",
        }}
      />
    </Flex>
  );
};

MessageComposer.propTypes = {};

export default MessageComposer;
