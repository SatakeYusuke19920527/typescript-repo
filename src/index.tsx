import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

type Foo = JSX.IntrinsicAttributes

ReactDOM.render(
  <React.StrictMode>
    <App description='description' />
  </React.StrictMode>,
  document.getElementById('root')
)
