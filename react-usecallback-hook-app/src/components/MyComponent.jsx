import React, { memo } from 'react'

const MyComponent = ({increase}) => {
    console.log("Child Component Render...")
  return (
    <div>
      <button onClick={increase}>Child Component</button>
    </div>
  )
}

export default memo(MyComponent)
