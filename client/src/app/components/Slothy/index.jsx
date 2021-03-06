import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import SignUpForm from '../../../signup/components/SignUpForm';
import PrivateRoute from '../PrivateRoute';
import {selectIsAuthenticated} from '../../../auth/redux/selectors';
import Home from '../Home';
import Dashboard from '../Dashboard';

const Slothy = ({isAuthenticated}) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route
        path="/login"
        render={({location}) => {
          return isAuthenticated ? (
            <Redirect to={location.state.from} />
          ) : (
            <div>hello</div>
          );
        }}
      />
      <Route
        path="/signup"
        render={() => {
          return isAuthenticated ? <Redirect to="/@me" /> : <SignUpForm />;
        }}
      />
      <PrivateRoute path={['/@me*']} component={Dashboard} />
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
});

Slothy.propTypes = PropTypes.bool.isRequired;

export default connect(mapStateToProps)(Slothy);
