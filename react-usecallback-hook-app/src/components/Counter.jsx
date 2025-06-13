import React, { useCallback, useState } from 'react'
import MyComponent from './MyComponent';

const Counter = () => {
    const [count, setCount] = useState(0);

   const increase = useCallback(()=>{
        setCount((prev)=> prev+1)
    },[])
   const decrease = useCallback(()=>{
        setCount((prev)=> prev-1)
    },[])

  return (
    <div>

      <h1>Count : {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    
    <br/>
    <br/>

    <MyComponent increase={increase}/>
    
    </div>
  )
}

export default Counter
