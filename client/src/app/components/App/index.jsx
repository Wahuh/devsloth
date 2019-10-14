import React, {useEffect} from 'react';
import authApi from '../../../api/auth.api';
import './App.scss';
import {connect} from 'react-redux';
import {jwtLoginRequest} from '../../../login/redux/actions';
import Slothy from '../Slothy';

const App = ({onJwtLogin}) => {
  useEffect(() => {
    const jwt = authApi.getJwt();
    if (jwt) {
      onJwtLogin(jwt);
    }
  }, []);

  return <Slothy />;
};

export default connect(
  null,
  {
    onJwtLogin: jwtLoginRequest,
  },
)(App);
