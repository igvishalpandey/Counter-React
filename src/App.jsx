import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15);


  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeVal = () => {
    if (counter <= 0) {
      counter = 0;
    }
    else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div>
        <h1>Counter: useState()</h1>
        <h2>Counter Value: {counter}</h2>

        <div>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeVal}>Remove Value</button>
        </div>

      </div>
    </>
  )
}

export default App
