import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Slothy.scss';
import SignUpForm from '../../../signup/components/SignUpForm';

const Slothy = () => {
  return (
    <Router>
      <Route exact path="/signup" component={SignUpForm} />
    </Router>
  );
};

export default Slothy;
