import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increse } from '../redux/Action';

const Counter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter Apllication</h1>
      <h1>Counter : {count}</h1>

      <button onClick={()=>dispatch(increse)}>Increment</button>
      <button onClick={()=>dispatch(decrease())}>Decrement</button>
    </div>
  )
}

export default Counter
