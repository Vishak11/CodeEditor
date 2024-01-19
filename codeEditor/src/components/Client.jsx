import React from 'react'
import Avatar from 'react-avatar';

const Client = ({username,userid}) => {
  return (
    <div className='client'>
       <Avatar name={username} size={50} round="10px"/>
        <span className='userName'>{username}</span>
        <span className='userName'>{userid}</span>
        </div>
  )
}

export default Client