'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BatteryPage from '../Batteries/BatteryPage';
import {inject, observer} from 'mobx-react';
import Sidebar from '../SideBar/SideBar';
import s from './styles.module.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.authStore.logout();
  }

  render() {
    return (
      <div className={s.main}>
        <div className={s.sideBar}>
          <Sidebar/>
        </div>
        <div className={s.content}>
          <BatteryPage />
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  authStore: PropTypes.object
}

export default inject('authStore')(observer(Dashboard));