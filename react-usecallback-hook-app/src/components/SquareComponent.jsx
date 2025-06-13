import React, { useMemo, useState } from 'react'

const SquareComponent = () => {

    const [number, setNumber] = useState(0);


   let square = useMemo(()=>{
        return number*number;
    })

  return (
    <div>
      <h2>Number : {number} and Square : {square}</h2>
      <button onClick={()=>setNumber((prev)=>prev+1)}>Click</button>
    </div>
  )
}

export default SquareComponent
