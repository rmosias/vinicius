import React from 'react'

import './style.scss'

const Button = ({ text, className, type }) => (

  <button
    type={type}
    className={className}
  >
    {text}
  </button>
)

export default Button