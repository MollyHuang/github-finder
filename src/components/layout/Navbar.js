// rafce + tab
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// #13 - Stateless Functional Components
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

// Default Values
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

// Define typescript
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar