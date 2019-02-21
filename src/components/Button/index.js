import React from 'react';

import './style.scss'


export const Button = ({ text, className }) => (
  <button
    className={className}
  >
    {text}
  </button>
);

export default Button
