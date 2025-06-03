import React from 'react'

const LoadingLogic = (WraperComponent) => {

const EnhancedComponent = ({isLoading, users})=>{

    if(isLoading){
        return<h1>Loading...</h1>
    }

    return(
        <WraperComponent users={users}/>
    )

}

return EnhancedComponent;

}

export default LoadingLogic
