import React, { useState } from 'react'

const CounterLogic = (WrapperComponent) => {
    const EnhancedComponent = ()=>{
        const [count, setCount] = useState(0)
        const increment =()=>{
            setCount(count+1);
        }
        return(
<WrapperComponent count={count} increment={increment} />
        )
    }

    return EnhancedComponent;
}

export default CounterLogic
