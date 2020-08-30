import React from "react";
import Home from "./home/Home";
import Signup from "./auth/Signup";
import { Flex } from "rebass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PropTypes from "prop-types";
import Chat from "./chat/Chat";

const App = (props) => {
  return (
    <Router>
      <Flex height="100vh" flexDirection="column" className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="me" element={<Chat />} />
        </Routes>
      </Flex>
    </Router>
  );
};

App.propTypes = {};

export default App;
