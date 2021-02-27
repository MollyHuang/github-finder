// rce + tab
import React from 'react';
import PropTypes from 'prop-types';

// #13 - Stateless Functional Components
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
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