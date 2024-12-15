import React from 'react';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  authorized,
  children,
  redirectTo = '/login'
}) => {
  return authorized ? children : <Navigate to={redirectTo} />;
}

ProtectedRoute.propTypes = {
  authorized: PropTypes.bool.isRequired,
  children: PropTypes.node,
  redirectTo: PropTypes.string
};

export default ProtectedRoute;