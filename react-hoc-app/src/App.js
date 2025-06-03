import React from 'react'
import CounterUI from './components/CounterUI'
import CounterLogic from './components/CounterLogic'

const CounterUILogic = CounterLogic(CounterUI);
const App = () => {
  return (
    <div>
      <CounterUILogic/>
    </div>
  )
}

export default App
