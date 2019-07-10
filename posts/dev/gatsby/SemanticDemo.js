import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const SemanticDemo = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button color="red" onClick={() => setCount(0)}>
        Reset
      </Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>+1</Button>
      <span>{count}</span>
    </>
  )
}

export default SemanticDemo
