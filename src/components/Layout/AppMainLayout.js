import React from 'react';
import {Outlet} from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import s from './styles.module.css';

const AppMainLayout = () => {
  return (
    <div className={s.layout}>
      <SideBar />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppMainLayout;