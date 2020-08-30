import React from "react";
import PropTypes from "prop-types";
import { Flex, Text, Button } from "rebass";
import { Input } from "@rebass/forms";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";

const Signup = (props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      flex={1}
    >
      <Flex
        flex={1}
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        sx={{
          borderRadius: "4px",
          padding: "1rem",
          // border: "1px solid grey",
        }}
      >
        <Text pb="2rem" fontWeight={700}>
          Signup for your account
        </Text>
        <Input
          placeholder="Enter email"
          sx={{
            fontFamily: "inherit",
            backgroundColor: "#FAFBFC",
            border: "2px solid #DFE1E6",
            borderRadius: "4px",
            mb: "2rem",
          }}
        />
        <Button
          fontWeight={700}
          width="100%"
          color="#014D40"
          backgroundColor="#65D6AD"
          sx={{
            mb: "1rem",
          }}
        >
          Continue
        </Button>
        <Text fontWeight={700} mb="1rem">
          OR
        </Text>
        <GitHubButton />
        <GoogleButton />
        <Text fontWeight={700} color="#147D64">Already have an account? Login</Text>
      </Flex>
    </Flex>
  );
};

Signup.propTypes = {};

export default Signup;
