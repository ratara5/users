import React from 'react'

const User = ({
    name,
    id,
    username,
    onClick
}) => {
  return (
    <div onClick={()=>onClick(id)}>
        <h2>Name: {name}</h2>
        <h3>Username: {username}</h3>
    </div>
  )
}

export default User