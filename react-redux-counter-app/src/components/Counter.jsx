import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increment } from '../redux/Action';

const Counter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter</h1>
      <p>Count : {count}</p>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Increase</button>
    
    </div>
  )
}

export default Counter
