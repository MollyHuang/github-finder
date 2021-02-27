//rce + tab
import React from 'react';
import PropTypes from 'prop-types';

// #13 - Stateless Functional Components
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  //const { login, avatar_url, html_url } = props.user;   // #13 也可轉換成上面的寫法

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

//user: ptor + tab
//user: pta + tab
//user: PropTypes.array,

export default UserItem
