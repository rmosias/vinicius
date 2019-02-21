import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">Vinicius Vicentini</Link>

        <div className="menu">
          <ul>

            <li className="item">
              <Link to="/user">User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header