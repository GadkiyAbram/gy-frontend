import React, {Fragment} from 'react';
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

export const AppRoutes = ({authorized}) => {
  return (
    <Fragment>
      <Routes>
        {
          routes.map(({
            path,
            element,
            isPublic
          },
          index) => (
            <Route
              key={index}
              path={path}
              element={
                isPublic ? (
                  authorized && path === LOGIN ? (
                    <Navigate to={DASHBOARD} />
                  ) : (
                    element
                  )
                ) : (
                  <ProtectedRoute authorized={authorized}>{element}</ProtectedRoute>
                )
              }
            />
          ))
        }
      </Routes>
    </Fragment>
  );
};

AppRoutes.propTypes = {
  authorized: PropTypes.bool
}