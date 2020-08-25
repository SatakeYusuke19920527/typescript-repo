import React, { FC } from 'react'
import './App.css'
import Counter from './Counter'
interface AppProps {
  message?: string
  description?: string
}

const App: FC<AppProps> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <Counter />
    </div>
  )
}

App.defaultProps = {
  message: 'Hello defaultProps',
  description: 'this is app component'
}

export default App
