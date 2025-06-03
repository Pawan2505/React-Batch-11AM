import React from 'react'

const LoadingUI = ({users}) => {
  return (
    <div>
      <h1>Users List</h1>
      {
        users.map((user,index)=>(
            <li key={index}>{user}</li>
        ))
      }
    </div>
  )
}

export default LoadingUI
