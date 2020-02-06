/**
 *
 * Button.js
 * Reusable Button component
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import 'style.css';

const Button = ({ styleClass, value, onClick }) => (
  <button className={`btn ${styleClass}`} onClick={event => onClick(event)}>
    {value}
  </button>
);

Button.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styleClass: 'btn-primary',
};

export default Button;
