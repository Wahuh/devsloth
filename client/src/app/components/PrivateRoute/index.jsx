import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {getIsAuthenticated} from '../../../auth/redux/selectors';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
  return (
    /* eslint-disable */
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: props.match.url},
            }}
          />
        )
      }
    />
    /* eslint-enable */
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
