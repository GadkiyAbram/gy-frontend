import React from 'react';
import LoginRegister from '../LoginRegister';
import Dashboard from '../Dashboard/Dashboard';
import BatteryPage from '../Batteries/BatteryPage';

const DEFAULT = '/';
const LOGIN = '/login';
const DASHBOARD = '/dashboard';
const BATTERIES = '/batteries';

const routes = [
  {path: DEFAULT, element: <LoginRegister />, isPublic: true},
  {path: LOGIN, element: <LoginRegister />, isPublic: true},
  {path: DASHBOARD, element: <Dashboard />, isPublic: false},
  {path: BATTERIES, element: <BatteryPage />, isPublic: false}
];

export {
  routes,
  LOGIN,
  DASHBOARD
};