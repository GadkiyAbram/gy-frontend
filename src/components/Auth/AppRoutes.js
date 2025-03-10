import React from 'react';
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ProtectedRoute from './ProtectedRoute';
import {
  routes,
  LOGIN,
  DASHBOARD
} from './const';
import AppMainLayout from '../Layout/AppMainLayout';

export const AppRoutes = ({ authorized }) => {
  return (
    <Routes>
      <Route
        path={LOGIN}
        element={authorized ?
          <Navigate to={DASHBOARD} /> :
          routes.find(r => r.path === LOGIN).element}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute authorized={authorized}>
            <AppMainLayout />
          </ProtectedRoute>
        }
      >
        {
          routes
            .filter(route => route.path !== LOGIN) // Exclude login route
            .map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
      </Route>
    </Routes>
  );
};

AppRoutes.propTypes = {
  authorized: PropTypes.bool
}