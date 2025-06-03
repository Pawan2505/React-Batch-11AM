import React, { useState } from 'react'
import LoadingUI from './components/LoadingUI'
import LoadingLogic from './components/LoadingLogic'

const LoadingUILogic = LoadingLogic(LoadingUI);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(()=>{
    setIsLoading(false)
  },2000)

  const users = ['Pawan','Shubham','Ram','Pankaj'];
  return (
    <div>
      <LoadingUILogic isLoading={isLoading} users={users}/>
    </div>
  )
}

export default App
