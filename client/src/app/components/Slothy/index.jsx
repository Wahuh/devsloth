import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './Slothy.scss';
import SignUpForm from '../../../signup/components/SignUpForm';
import PrivateRoute from '../PrivateRoute';
import {getIsAuthenticated} from '../../../auth/redux/selectors';
import Me from '../../../me/components/Me';
import Home from '../Home';

const Slothy = ({isAuthenticated}) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />

      <Route
        path="/signup"
        render={() => {
          return isAuthenticated ? <Redirect to="/@me" /> : <SignUpForm />;
        }}
      />
      <PrivateRoute path="/@me" component={Me} />
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

Slothy.propTypes = PropTypes.bool.isRequired;

export default connect(mapStateToProps)(Slothy);
