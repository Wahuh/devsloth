import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getJwt} from '../../../api/auth.api';
import './App.scss';
import {jwtLoginRequest} from '../../../login/redux/actions';
import Slothy from '../Slothy';

const App = ({onJwtLogin}) => {
  useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      onJwtLogin(jwt);
    }
  }, []);

  return <Slothy />;
};

App.propTypes = {
  onJwtLogin: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    onJwtLogin: jwtLoginRequest,
  },
)(App);
