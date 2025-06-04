import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../redux/Action';

const Counter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
  return (
    <div>

        <h1>Redux Counter</h1>

        <p>Count : {count}</p>

        <button onClick={()=>dispatch(increase())}>Increase</button>
        <button onClick={()=>dispatch(decrease())}>Decrease</button>
      
    </div>
  )
}

export default Counter;
