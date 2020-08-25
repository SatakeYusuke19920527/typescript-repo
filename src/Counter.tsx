import React, { FC, useState, useRef, useEffect } from 'react'

const Counter: FC<{}> = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => {
    setCount(prev => {
      return prev + 1
    })
  }

  const decrement = () => {
    setCount(prev => {
      return prev - 1
    })
  }

  const renderTimes = useRef(0)
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1
  }, [count])

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>this component was renderTimes : {renderTimes.current} times!</div>
    </div>
  )
}

export default Counter
