'use strict'

import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {
  AppRoutes,
  DASHBOARD,
  LOGIN
} from './components/Auth';

const App = ({authStore}) => {
  const navigate = useNavigate();

  const {
    setAuth,
    authorized
  } = authStore;

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setAuth(false);
      navigate(LOGIN);
    } else {
      setAuth(true);
      navigate(DASHBOARD);
    }
  }, [authStore]);

  return (
    <AppRoutes authorized={authorized} />
  )
};

App.propTypes = {
  authStore: PropTypes.object
}

export default inject('authStore')(observer(App));
