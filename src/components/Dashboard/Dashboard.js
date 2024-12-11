'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BatteryPage from '../Batteries/BatteryPage';
import {inject, observer} from 'mobx-react';
import {Button} from '@material-ui/core';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.authStore.logout();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <BatteryPage />
        <Button onClick={this.logout}>
          LOGOUT
        </Button>
      </div>
    )
  }
}

Dashboard.propTypes = {
  authStore: PropTypes.object
}

export default inject('authStore')(observer(Dashboard));